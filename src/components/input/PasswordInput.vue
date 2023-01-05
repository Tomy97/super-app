<script setup lang="ts">
  import { useField, defineRule } from "vee-validate";
  import { min, required } from "@vee-validate/rules";

  defineRule("required", required);
  defineRule("min", min);
  defineEmits(["update:modelValue"]);

  const props = defineProps<{
    label: string;
    placeholder: string;
    modelValue: string;
    required: boolean;
  }>();

  const { value, errorMessage } = useField(
    props.label,
    {
      min: 6,
      required: props.required
    },
    {
      initialValue: props.modelValue
    }
  );
</script>
<template>
  <div class="mb-3 row">
    <label class="form-label">{{ label }}</label>
    <input
      type="password"
      class="form-control"
      :class="errorMessage ? 'space-bottom-style' : ''"
      v-model="value"
      @input="$emit('update:modelValue', value)"
      :required="required"
      :placeholder="placeholder"
    />
    <span class="text-danger">{{ errorMessage }}</span>
  </div>
</template>
<style lang="scss" scoped>
  .space-bottom-style {
    margin-bottom: 0.3rem;
  }
</style>
