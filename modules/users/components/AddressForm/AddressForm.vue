<script setup lang="ts">
import type { Address } from '@/modules/users/entities/Address/Address'

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'trigger-address-search'): void
}>()

const address = defineModel<Address>({
  required: true,
  default: {
    zipCode: '',
    street: '',
    number: '',
    city: '',
    state: '',
    neighborhood: '',
    complement: '',
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col lg:flex-row gap-2 flex-1">
      <div class="flex flex-col gap-2 flex-1">
        <label for="cep">
          CEP
          <i v-if="props.loading" class="pi pi-spinner text-gray-500 animate-spin"></i>
        </label>
        <InputText
          placeholder="00000-000"
          @blur="() => $emit('trigger-address-search')"
          id="cep"
          v-maska
          data-maska="#####-###"
          v-model="address.zipCode"
        />
      </div>

      <div class="flex flex-col gap-2 flex-1">
        <label for="number">Número</label>
        <InputText id="number" v-model="address.number" placeholder="37" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1">
        <label for="city">Cidade</label>
        <InputText id="city" v-model="address.city" placeholder="São Paulo" />
      </div>

      <div class="flex flex-col gap-2 flex-1">
        <label for="state">Estado</label>
        <InputText id="state" v-model="address.state" placeholder="São Paulo" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1">
        <label for="neighborhood">Bairro</label>
        <InputText id="neighborhood" v-model="address.neighborhood" placeholder="Itaim Bibi" />
      </div>

      <div class="flex flex-col gap-2 flex-1">
        <label for="complement">Complemento</label>
        <InputText id="complement" v-model="address.complement" placeholder="Apt 39" />
      </div>
    </div>
  </div>
</template>
