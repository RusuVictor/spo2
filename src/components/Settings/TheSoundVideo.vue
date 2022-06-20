<template>
  <div class="soundvideo">
    <div class="soundvideo__left">
      <TheMicrophone></TheMicrophone>

      <BaseInput
        placeholder="IP адрес микрофона"
        class="--min --full"
      ></BaseInput>

      <BaseSelect
        :simple="true"
        class="--full --top --settings"
        placeholder="Аналоговый"
        :list="['Аналоговый', '1', '2', '3']"
      >
      </BaseSelect>

      <BaseSelect
        :simple="true"
        class="--full --top --settings"
        placeholder="Динамик"
        :list="['Динамик', '1', '2', '3']"
      ></BaseSelect>

      <div class="soundvideo__check-group">
        <BaseChecbox text="Использовать шумоподавление"></BaseChecbox>
        <BaseChecbox text="Использовать автоматическое усиление"></BaseChecbox>
      </div>
    </div>
    <div class="soundvideo__right">
      <TheCamera></TheCamera>
    </div>
  </div>
</template>

<script>
import TheCamera from "@/components/Settings/TheCamera";
import BaseInput from "@/components/global/BaseInput";
import BaseSelect from "@/components/global/BaseSelect";
import BaseChecbox from "@/components/global/BaseChecbox";
import TheMicrophone from "@/components/Settings/TheMicrophone";
export default {
  name: "TheSoundVideo",
  components: { TheMicrophone, BaseChecbox, BaseSelect, BaseInput, TheCamera }
};
</script>

<style scoped></style>
