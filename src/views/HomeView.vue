<template>
  <n-form
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    style="padding-left: 5%; padding-top: 7%"
  >
    <n-form-item label="Id" path="Id">
      <n-input v-model:value="formValue.Id" placeholder="Introduce su id" />
    </n-form-item>

    <n-form-item label="Nombre" path="Nombre">
      <n-input v-model:value="formValue.Nombre" placeholder="Introduce su nombre" />
    </n-form-item>

    <n-form-item label="El item es pasivo?" path="EsPasivo">
      <n-select
        v-model:value="formValue.Pasivo"
        placeholder="Pasivo"
        :options="opcionesEsPasivo"

      />
    </n-form-item>

    <n-form-item label="Calidad" path="Calidad">
      <n-input v-model:value="formValue.Calidad" placeholder="Que calidad es?" />
    </n-form-item>

    <n-form-item label="En que pool sale?" path="Pool">
      <n-select
        v-model:value="formValue.Pool"
        placeholder="Pool"
        :options="opcionesPool"
        multiple
      />
    </n-form-item>

    <n-form-item label="Subir imagen del objeto" path="Imagen">
      <n-upload
        v-model:value="formValue.Imagen">
        <n-button>Subir imagen del objeto</n-button>
      </n-upload>
    </n-form-item>


    <n-form-item>
      <n-button>
        Validate
      </n-button>
    </n-form-item>
  </n-form>

  <pre style="padding-left: 5%">
    {{ JSON.stringify(formValue, null, 2) }}
  </pre>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const formRef = ref(null)
    return {
      formRef,
      opcionesEsPasivo: ['Si', 'No'].map(
        (v) => ({
          label: v,
          value: v
        })
      ), opcionesPool: ['Dorada', 'Secreta', 'Ultra-Secreta', 'Crane Game', 'Sagrada', 'Diablo'].map(
        (v) => ({
          label: v,
          value: v
        })
      ),
      model: ref({
        selectValue: null,
        multipleSelectValue: null
      }),
      formValue: ref({
        Id: '',
        Nombre: '',
        Pasivo: '',
        Calidad: '',
        Pool: '',
        Imagen: ''
      }),
      rules: {
        Id: {
          required: true,
          message: 'Porfi la id, es obligatoria.',
          trigger: ['input']
        }, Nombre: {
          required: true,
          message: 'Porfi el nombre del objeto, es obligatorio.',
          trigger: ['input']
        }, Pasivo: {
          required: true,
          message: 'Porfi dime si es pasivo o no, es obligatorio.',
          trigger: ['input']
        }, Calidad: {
          required: true,
          message: 'Porfi dime la calidad del objeto, es obligatorio.',
          trigger: ['input']
        }, Pool: {
          required: true,
          message: 'Porfi dime donde sale, es obligatorio.',
          trigger: ['input']
        }, Imagen: {
          required: true,
          message: 'Porfi sube una imagen, es obligatorio.',
          trigger: ['input']
        }
      }
    }
  }
})
</script>


