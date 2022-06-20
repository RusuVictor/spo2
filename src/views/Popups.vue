<template>
  <div class="popups-page">
    <!--popupRedactSession-->
    <button @click="popupRedactSession = !popupRedactSession">
      PopupRedactSession
    </button>
    <br />
    <PopupRedactSession
      :show="popupRedactSession"
      @hidePopup="popupRedactSession = false"
    ></PopupRedactSession>

    <!--popupRedactSession-->
    <button @click="popupRedactSession2 = !popupRedactSession2">
      PopupRedactSession2
    </button>
    <br />
    <PopupRedactSession
      :show="popupRedactSession2"
      @hidePopup="popupRedactSession2 = false"
      buttonText="Добавить"
    ></PopupRedactSession>

    <!--popupCalendar-->
    <button @click="popupCalendar = !popupCalendar">
      Popupcalendar
    </button>
    <br />
    <PopupCalendar
      :show="popupCalendar"
      @hidePopup="popupCalendar = false"
    ></PopupCalendar>

    <!--popupCropRecord-->
    <button @click="popupCropRecord = !popupCropRecord">
      PopupCropRecord
    </button>
    <br />
    <PopupCropRecord
      :show="popupCropRecord"
      @hidePopup="popupCropRecord = false"
    ></PopupCropRecord>

    <!--popupMeetingParticip-->
    <button @click="openPopupMeetingParticip()">
      PopupMeetingParticip
    </button>
    <br />
    <PopupMeetingParticip
      :show="popupMeetingParticip"
      @hidePopup="popupMeetingParticip = false"
    ></PopupMeetingParticip>

    <!--popupAddUser-->
    <button @click="popupAddUser = !popupAddUser">
      PopupAddUser
    </button>
    <br />
    <PopupAddUser
      :show="popupAddUser"
      @hidePopup="popupAddUser = false"
    ></PopupAddUser>

    <!--popupAddObj-->
    <button @click="popupAddObj = !popupAddObj">
      PopupAddObj
    </button>
    <br />
    <PopupAddObj
      :show="popupAddObj"
      @hidePopup="popupAddObj = false"
    ></PopupAddObj>

    <!--popupEvents-->
    <button @click="popupEvents = !popupEvents">
      PopupEvents
    </button>
    <br />
    <PopupEvents
      :show="popupEvents"
      @hidePopup="popupEvents = false"
    ></PopupEvents>

    <!--popupListRoles-->
    <button @click="popupListRoles = !popupListRoles">
      PopupListRoles
    </button>
    <br />
    <PopupListRoles
      :show="popupListRoles"
      @hidePopup="popupListRoles = false"
    ></PopupListRoles>

    <br />
    <h4>Dialog</h4>
    <!--dialogTransferMeeting-->
    <button @click="dialogTransferMeeting = !dialogTransferMeeting">
      DialogTransferMeeting
    </button>
    <br />
    <DialogTransferMeeting
      :show="dialogTransferMeeting"
      @hidePopup="dialogTransferMeeting = false"
    ></DialogTransferMeeting>

    <!--dialogCloseRevcord-->
    <button @click="dialogCloseRecord = !dialogCloseRecord">
      DialogCloseRecord
    </button>
    <br />
    <DialogCloseRecord
      :show="dialogCloseRecord"
      @hidePopup="dialogCloseRecord = false"
    ></DialogCloseRecord>

    <!--dialogRecord-->
    <button @click="dialogRecord = !dialogRecord">
      DialogRecord
    </button>
    <br />
    <DialogRecord
      :show="dialogRecord"
      @hidePopup="dialogRecord = false"
    ></DialogRecord>

    <br />
    <h4>Contact</h4>
    <!--newContact-->
    <button @click="newContact = !newContact">
      NewContact
    </button>
    <br />
    <NewContact :show="newContact" @hidePopup="newContact = false"></NewContact>

    <br />
    <h4>Videoconf</h4>
    <!--newContact-->
    <button @click="popupContact = !popupContact">
      PopupContact
    </button>
    <br />
    <PopupContact
      :show="popupContact"
      @hidePopup="popupContact = false"
    ></PopupContact>

    <!--newContact-->
    <button @click="popupContactAddress = !popupContactAddress">
      PopupContactAddress
    </button>
    <br />
    <PopupContactAddress
      :show="popupContactAddress"
      @hidePopup="popupContactAddress = false"
    ></PopupContactAddress>

    <!--popupRecent-->
    <button @click="popupRecent = !popupRecent">
      PopupRecent
    </button>
    <br />
    <PopupRecent
      :show="popupRecent"
      @hidePopup="popupRecent = false"
    ></PopupRecent>

    <!--popupReference-->
    <button @click="OPEN_POPUP('popupReference')">
      PopupReference
    </button>
    <br />
    <PopupReference
      :show="popupReference"
      @hidePopup="popupReference = false"
    ></PopupReference>

    <!--popupAddParticipant-->
    <button @click="popupAddParticipant = !popupAddParticipant">
      PopupAddParticipant
    </button>
    <br />
    <PopupAddParticipant
      :show="popupAddParticipant"
      @hidePopup="popupAddParticipant = false"
    ></PopupAddParticipant>

    <!--popupAddParticipant-->
    <button @click="popupCallContact = !popupCallContact">
      PopupCallContact
    </button>
    <br />
    <PopupCallContact
      :show="popupCallContact"
      @hidePopup="popupCallContact = false"
    ></PopupCallContact>

    <!--popupCallRecent-->
    <button @click="popupCallRecent = !popupCallRecent">
      PopupCallRecent
    </button>
    <br />
    <PopupCallRecent
      :show="popupCallRecent"
      @hidePopup="popupCallRecent = false"
    ></PopupCallRecent>

    <!--popupAddRoom-->
    <button @click="popupAddRoom = !popupAddRoom">
      PopupAddRoom
    </button>
    <br />
    <PopupAddRoom
      :show="popupAddRoom"
      @hidePopup="popupAddRoom = false"
    ></PopupAddRoom>

    <!--AddParticipant-->
    <button @click="openAddParticipant">
      AddParticipant
    </button>
    <br />
    <AddParticipant
      :show="AddParticipant"
      @hidePopup="AddParticipant = false"
    ></AddParticipant>
  </div>
</template>

<script>
import PopupRedactSession from "@/components/Popup/PopupRedactSession";
import PopupCalendar from "@/components/Popup/PopupCalendar";
import PopupCropRecord from "@/components/Popup/PopupCropRecord";
import PopupMeetingParticip from "@/components/Popup/PopupMeetingParticip";
import PopupAddUser from "@/components/Popup/PopupAddUser";
import PopupAddObj from "@/components/Popup/PopupAddObj";
import PopupEvents from "@/components/Popup/PopupEvents";
import PopupListRoles from "@/components/Popup/PopupListRoles";
import DialogTransferMeeting from "@/components/Popup/DialogTransferMeeting";
import DialogCloseRecord from "@/components/Popup/DialogCloseRecord";
import DialogRecord from "@/components/Popup/DialogRecord";
import NewContact from "@/components/Popup/NewContact";
import PopupContact from "@/components/Popup/PopupContact";
import PopupContactAddress from "@/components/Popup/PopupContactAddress";
import PopupRecent from "@/components/Popup/PopupRecent";
import PopupReference from "@/components/Popup/PopupReference";
import PopupAddParticipant from "@/components/Popup/PopupAddParticipant";
import PopupCallContact from "@/components/Popup/PopupCallContact";
import PopupCallRecent from "@/components/Popup/PopupCallRecent";
import PopupAddRoom from "@/components/Popup/PopupAddRoom";
import AddParticipant from "@/components/Popup/AddParticipant";

import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "Popups",
  components: {
    PopupAddObj,
    PopupAddUser,
    PopupMeetingParticip,
    PopupCropRecord,
    PopupCalendar,
    PopupRedactSession,
    PopupEvents,
    PopupListRoles,
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
    PopupAddRoom,
    AddParticipant
  },
  data() {
    return {
      popupRedactSession: false,
      popupRedactSession2: false,
      popupCalendar: false,
      popupCropRecord: false,
      popupMeetingParticip: false,
      popupAddUser: false,
      popupAddObj: false,
      popupEvents: false,
      popupListRoles: false,
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
      popupAddRoom: false,
      AddParticipant: false
    };
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    openPopupMeetingParticip() {
      this.OPEN_POPUP("popupMeetingParticip");
    },
    openAddParticipant() {
      this.OPEN_POPUP("AddParticipant");
    }
  }
};
</script>
