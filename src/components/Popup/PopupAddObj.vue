<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup">
    <template slot="close-icon"></template>
    <h2>Редактировать</h2>

    <BaseSelect :placeholder="placeholder"
      :list="[
        'Субъект РФ',
        'Субъект РФ 2',
        'Субъект РФ 3',
        'Субъект РФ 4',
        'Субъект РФ 5'
      ]"
      :simple="false"
      :selectPlaceholder="true"
      :firstselect="true"
      class-names="--full --border --small --list-min "
    ></BaseSelect>
    
    <BaseInput
      placeholder="Классификационный код"
      :small="true"
      :border="true"
      class-names="--full"
    ></BaseInput>

    <BaseInput
      placeholder="Наименование суда"
      :small="true"
      :border="true"
      class-names="--full"
    ></BaseInput>

    <BaseInput
      placeholder="Юридический адрес"
      :border="true"
      :textarea="true"
      class-names="--full"
    ></BaseInput>

    <!--    <BaseInput-->
    <!--      placeholder="Пароль"-->
    <!--      :small="true"-->
    <!--      :border="true"-->
    <!--      class-names="&#45;&#45;full"-->
    <!--    ></BaseInput>-->

    <div class="btn-group">
      <BaseButton text="Сохранить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "PopupAddObj",
  components: { BaseInput, BaseSelect, BaseButton },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      placeholder: 'Субъект РФ',
      date: new Date()
    };
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
