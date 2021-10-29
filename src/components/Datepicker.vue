<template>
  <div class="datepicker">
    <VDropdown :triggers="['click']">
      <div class="datepicker__display">
        <slot name="value" :date="date">
          {{ date ? toDMY(date) : placeholder }}
        </slot>
      </div>
      <template #popper>
        <div class="datepicker__picker">
          <div class="datepicker__head">
            <button type="button" @click="switchMonth(-1)">
              <img src="@/assets/img/icons/caret-down.svg">
            </button>
            <h3>{{ currentMonthDisplay }}</h3>
            <button type="button" @click="switchMonth(1)">
              <img src="@/assets/img/icons/caret-down.svg">
            </button>
          </div>
          <div class="datepicker__body">
            <div class="days-name">
              <p v-for="(day, index) in daysShort" :key="index">
                {{ day }}
              </p>
            </div>
            <div class="days-digits">
              <button
                v-for="monthDate in daysInMonth"
                :key="`${monthDate.day}/${monthDate.month}`"
                :class="{
                  selected: selected === `${monthDate.day}/${monthDate.month}`,
                  opacity: currentMonth.getMonth() + 1 !== monthDate.month,
                }"
                :disabled="monthDate.disabled"
                @click.stop="select(monthDate)">
                {{ monthDate.day }}
              </button>
            </div>
          </div>
        </div>
      </template>
    </VDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, ComputedRef } from 'vue';
import { toDMY } from '@/filters';
import { daysShort, months } from '@/constants/dates';

interface Props {
  date?: Date | null;
  min?: Date | null;
  max?: Date | null;
  keepOpen?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  date: () => null,
  min: () => null,
  max: () => null,
  keepOpen: false,
  placeholder: '-',
});

const emit = defineEmits(['update:date', 'select']);

const currentMonth = ref(props.date || new Date());

const selected = computed(() => {
  return props.date ? `${props.date.getDate()}/${props.date.getMonth()}` : null;
});

const currentMonthDisplay = computed(() => {
  const month = months[currentMonth.value.getMonth()];
  return `${month}, ${currentMonth.value.getFullYear()}`;
});

const firstDayOfMonth = computed(() => (new Date(
  currentMonth.value.getFullYear(),
  currentMonth.value.getMonth(),
  1,
).getDay() + 7 - 1) % 7);
const previousMonthLastDay = computed(() => new Date(
  currentMonth.value.getFullYear(),
  currentMonth.value.getMonth(),
  0,
).getDate());

function isAfterMax(day: number): boolean {
  return !!props.max && +new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day) > +props.max;
}

function isBeforeMin(day: number): boolean {
  return !!props.min && +new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day) < +props.min;
}

const daysInMonth = computed(() => {
  const count = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1, 0).getDate();

  return [
    // Prepends calendar with previous month's days
    ...[...Array(firstDayOfMonth.value)].map((_, index) => ({
      day: previousMonthLastDay.value - index,
      month: ((currentMonth.value.getMonth() + 12 - 1) % 12) + 1,
      year: currentMonth.value.getMonth() === 0 ? currentMonth.value.getFullYear() - 1 : currentMonth.value.getFullYear(),
      disabled: isAfterMax(index + 1) || isBeforeMin(index + 1),
    })).reverse(),
    ...[...Array(count)].map((_, index) => ({
      day: index + 1,
      month: currentMonth.value.getMonth() + 1,
      year: currentMonth.value.getFullYear(),
      disabled: isAfterMax(index + 1) || isBeforeMin(index + 1),
    })),
  ];
});

function switchMonth(direction: 1 | -1) {
  const to = Math.max(-1, Math.min(1, direction));
  currentMonth.value = new Date(currentMonth.value.setMonth(currentMonth.value.getMonth() + to));
}

type SelectedDate = typeof daysInMonth extends ComputedRef<(infer V)[]> ? V : never;

function select(date: SelectedDate) {
  const toEmit = new Date(date.year, date.month - 1, date.day);
  emit('update:date', toEmit);
  emit('select', toEmit);
}
</script>

<style lang="scss" scoped>
.datepicker {
  @apply relative flex cursor-pointer h-10;

  &__display {
    @apply relative rounded border border-purple-20;
    @apply text-xs;
    @apply flex items-center py-1 pr-6 pl-2 h-full;

    &:after {
      content: '\25BC';
      position: absolute;
      right: 8px;
      top: 55%;
      transform: translateY(-50%);
      font-size: 10px;
      color: #1A1A1A;
    }
  }

  &__picker {
    @apply bg-white border border-lightgray rounded;
    @apply p-4 mt-2 mb-5;
  }

  &__head {
    @apply flex justify-between items-center mb-2;

    h3 {
      @apply text-black font-medium;
    }

    button {
      @apply p-2;
    }

    button:first-child img {
      transform: rotate(90deg);
    }

    button:last-child img {
      transform: rotate(-90deg);
    }
  }

  &__body {
    .days-name,
    .days-digits {
      @apply grid grid-cols-7;
      justify-items: center;

      p, button {
        @apply flex justify-center items-center w-10 h-10 m-0;
      }
    }

    .days-name {
      @apply text-gray-80;
    }

    .days-digits {
      @apply text-black;

      button {
        @apply duration-300 rounded relative;

        &.opacity,
        &:disabled {
          color: rgba(#656565, .75);
        }

        &:not(:disabled):hover, &.selected {
          @apply bg-purple text-white;
        }

        &.selected:after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 100%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
