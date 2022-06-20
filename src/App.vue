<template>
  <div id="app">
    <div class="appsection" :class="{ '--full': hideHeadMenu }">
      <div class="appsection__aside" v-if="!hideHeadMenu">
        <ThisMenu :route="currentPage"></ThisMenu>
      </div>
      <div
        class="appsection__content"
        :class="{ '--layout-active': appsectionLayout }"
      >
        <TheHeader v-if="!hideHeadMenu"></TheHeader>
        <div class="appsection__view">
          <router-view />
        </div>
      </div>
    </div>

    <DialogTransferMeeting
      :show="dialogTransferMeeting"
      @hidePopup="dialogTransferMeeting = false"
    ></DialogTransferMeeting>

    <DialogCloseRecord
      :show="dialogCloseRecord"
      @hidePopup="dialogCloseRecord = false"
    ></DialogCloseRecord>

    <DialogRecord
      :show="dialogRecord"
      @hidePopup="dialogRecord = false"
    ></DialogRecord>

    <NewContact :show="newContact" @hidePopup="newContact = false"></NewContact>

    <PopupContact
      :show="popupContact"
      @hidePopup="popupContact = false"
    ></PopupContact>

    <PopupContactAddress
      :show="popupContactAddress"
      @hidePopup="popupContactAddress = false"
    ></PopupContactAddress>

    <PopupRecent
      :show="popupRecent"
      @hidePopup="popupRecent = false"
    ></PopupRecent>

    <PopupReference
      :show="popupReference"
      @hidePopup="popupReference = false"
    ></PopupReference>

    <PopupAddParticipant
      :show="popupAddParticipant"
      @hidePopup="popupAddParticipant = false"
    ></PopupAddParticipant>

    <PopupCallContact
      :show="popupCallContact"
      @hidePopup="popupCallContact = false"
    ></PopupCallContact>

    <PopupCallRecent
      :show="popupCallRecent"
      @hidePopup="popupCallRecent = false"
    ></PopupCallRecent>

    <PopupMeetingParticip
      :show="popupMeetingParticip"
      @hidePopup="popupMeetingParticip = false"
    ></PopupMeetingParticip>

    <PopupListRoles
      :show="popupListRoles"
      @hidePopup="popupListRoles = false"
    ></PopupListRoles>

    <PopupAddRoom
      :show="popupAddRoom"
      @hidePopup="popupAddRoom = false"
    ></PopupAddRoom>

    <PopupAddUser
      :show="popupAddUser"
      @hidePopup="popupAddUser = false"
    ></PopupAddUser>

    <PopupRedactSession
      :show="popupRedactSession"
      @hidePopup="popupRedactSession = false"
    ></PopupRedactSession>

    <VideoReference
      :show="VideoReference"
      @hidePopup="VideoReference = false"
    ></VideoReference>

    <AddParticipant
      :show="AddParticipant"
      @hidePopup="AddParticipant = false"
    ></AddParticipant>

    <PopupAddUserRedact
      :show="PopupAddUserRedact"
      @hidePopup="PopupAddUserRedact = false"
    ></PopupAddUserRedact>

    <NewContactRedact
      :show="NewContactRedact"
      @hidePopup="NewContactRedact = false"
    ></NewContactRedact>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { CLOSE_POPUP } from "@/store/type";
import ThisMenu from "@/components/Menu/TheMenu";
import TheHeader from "@/components/Header/TheHeader";

import PopupContact from "@/components/Popup/PopupContact";
import PopupContactAddress from "@/components/Popup/PopupContactAddress";
import PopupRecent from "@/components/Popup/PopupRecent";
import PopupReference from "@/components/Popup/PopupReference";
import PopupAddParticipant from "@/components/Popup/PopupAddParticipant";
import PopupCallContact from "@/components/Popup/PopupCallContact";
import PopupCallRecent from "@/components/Popup/PopupCallRecent";
import DialogTransferMeeting from "@/components/Popup/DialogTransferMeeting";
import DialogCloseRecord from "@/components/Popup/DialogCloseRecord";
import DialogRecord from "@/components/Popup/DialogRecord";
import NewContact from "@/components/Popup/NewContact";
import PopupMeetingParticip from "@/components/Popup/PopupMeetingParticip";
import PopupListRoles from "@/components/Popup/PopupListRoles";
import PopupAddRoom from "@/components/Popup/PopupAddRoom";
import PopupAddUser from "@/components/Popup/PopupAddUser";
import PopupRedactSession from "@/components/Popup/PopupRedactSession";
import VideoReference from "@/components/Popup/VideoReference";
import AddParticipant from "@/components/Popup/AddParticipant";
import PopupAddUserRedact from "@/components/Popup/PopupAddUserRedact";
import NewContactRedact from "@/components/Popup/NewContactRedact";

export default {
  name: "App",
  components: {
    ThisMenu,
    TheHeader,
    DialogTransferMeeting,
    DialogCloseRecord,
    DialogRecord,
    NewContact,
    PopupContact,
    PopupContactAddress,
    PopupRecent,
    PopupReference,
    PopupAddParticipant,
    PopupCallContact,
    PopupCallRecent,
    PopupMeetingParticip,
    PopupListRoles,
    PopupAddRoom,
    PopupAddUser,
    PopupRedactSession,
    VideoReference,
    AddParticipant,
    PopupAddUserRedact,
    NewContactRedact
  },
  data() {
    return {
      dialogTransferMeeting: false,
      dialogCloseRecord: false,
      dialogRecord: false,
      newContact: false,
      popupContact: false,
      popupContactAddress: false,
      popupRecent: false,
      popupReference: false,
      popupAddParticipant: false,
      popupCallContact: false,
      popupCallRecent: false,
      popupMeetingParticip: false,
      popupListRoles: false,
      popupAddRoom: false,
      popupAddUser: false,
      popupRedactSession: false,
      VideoReference: false,
      AddParticipant: false,
      PopupAddUserRedact: false,
      NewContactRedact: false
    };
  },
  computed: {
    ...mapState(["appsectionLayout", "activePopup", "lastActivePopup"]),
    ...mapMutations([CLOSE_POPUP]),
    currentPage(e) {
      return e.$route.path;
    },
    hideHeadMenu(e) {
      return e.$route.path === "/launch" || e.$route.path === "/login";
    }
  },
  watch: {
    activePopup() {
      this[this.lastActivePopup] = false;

      setTimeout(() => {
        this[this.activePopup] = true;
      }, 10);
    }
  }
};
</script>
