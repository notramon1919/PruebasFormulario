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
      <n-input v-model:value="formValue.Id" placeholder="Introduce su id"/>
    </n-form-item>

    <n-form-item label="Nombre" path="Nombre">
      <n-input v-model:value="formValue.Nombre" placeholder="Introduce su nombre"/>
    </n-form-item>

    <n-form-item label="El item es pasivo?" path="EsPasivo">
      <n-select
          v-model:value="formValue.Pasivo"
          placeholder="Pasivo"
          :options="opcionesEsPasivo"

      />
    </n-form-item>

    <n-form-item label="Calidad" path="Calidad">
      <n-input v-model:value="formValue.Calidad" placeholder="Que calidad es?"/>
    </n-form-item>

    <n-form-item label="En que pool sale?" path="Pool">
      <n-select
          v-model:value="formValue.Pool"
          placeholder="Pool"
          :options="opcionesPool"
          multiple
      />
    </n-form-item>

    <n-form-item label="Imagen" path="Imagen">
      <n-input v-model:value="formValue.Imagen" placeholder="URL a la imagen"/>
    </n-form-item>


    <n-form-item>
      <n-button @click="enviarDatos">
        Enviar
      </n-button>
    </n-form-item>
  </n-form>

  <pre style="padding-left: 5%">
    {{ JSON.stringify(formValue, null, 2) }}
  </pre>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {createClient} from '@supabase/supabase-js';

export default defineComponent({
  setup() {
    const proyectoSupabase = 'https://hrialosnujxipkodwjdm.supabase.co';
    const proyectoSupabaseApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaWFsb3NudWp4aXBrb2R3amRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjg4ODEsImV4cCI6MjAxNDg0NDg4MX0.I8OaEwuxtSiLwDYpkrtIJsW2ygsRQ0EwYx0fw85aukU';
    const supabase = createClient(proyectoSupabase, proyectoSupabaseApi);

    const formRef = ref(null);

    const opcionesEsPasivo = ['Si', 'No'].map(
        (v) => ({
          label: v,
          value: v
        })
    );

    const opcionesPool = ['Dorada', 'Secreta', 'Ultra-Secreta', 'Crane Game', 'Sagrada', 'Diablo'].map(
        (v) => ({
          label: v,
          value: v
        })
    );

    const formValue = ref({
      Id: '',
      Nombre: '',
      Pasivo: '',
      Calidad: '',
      Pool: '',
      Imagen: ''
    });

    const rules = {
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
    };

    const enviarDatos = () => {
      supabase
          .from('Objetos')
          .upsert([formValue.value])
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
    };

    return {
      formRef,
      opcionesEsPasivo,
      opcionesPool,
      formValue,
      rules,
      enviarDatos
    };
  }

})
</script>


