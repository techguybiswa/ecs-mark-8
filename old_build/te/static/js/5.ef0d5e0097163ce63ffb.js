webpackJsonp([5],{"3j6G":function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{userDetails:this.getUserDetails,hideHeader:!0}}),this._v(" "),this._t("default"),this._v(" "),e("LoginModal"),this._v(" "),e("ShareModal"),this._v(" "),e("Alert",{attrs:{isReader:!0}})],2)},staticRenderFns:[]};e.a=a},"3xgT":function(t,e){},"5jJ/":function(t,e){},AS2t:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=u(i("Dd8w")),s=u(i("vjWy")),o=u(i("+jyM")),r=u(i("msXN"));i("0My8"),i("z/TA"),i("xfIr"),i("acYx"),i("SD0l"),i("OKeL"),i("vwXs");var n=u(i("hr/h")),l=u(i("hMKZ")),c=u(i("9Eii")),d=u(i("S0KR")),h=i("NYxO");function u(t){return t&&t.__esModule?t:{default:t}}e.default={components:{ReadLayout:s.default,Spinner:o.default,Reviews:n.default,Recommendation:l.default,ShareStrip:d.default,OpenInApp:c.default},mixins:[r.default],data:function(){return{fontSize:16,selectedChapter:1,scrollPosition:null,scrollDirection:null,counter:0,openRateRev:!1,openRateReaderm:!1,rateRev:"RATEREV",shouldShowOpenInAppStrip:!0}},methods:(0,a.default)({},(0,h.mapActions)("readerpage",["fetchPratilipiDetails","fetchPratilipiContentForHTML","clearCachedContents","addToLibrary","removeFromLibrary","fetchPratilipiContentForIMAGE","fetchAuthorDetails","followOrUnfollowAuthor"]),(0,h.mapActions)(["setShareDetails","setAfterLoginAction"]),{addPratilipiToLibrary:function(t){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LIBRARYADD_READERM_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId})),this.getUserDetails.isGuest?(this.setAfterLoginAction({action:this.$route.meta.store+"/addToLibrary",data:t}),this.openLoginModal(this.$route.meta.store,"LIBRARYADD","READERM")):this.addToLibrary(t)},triggerAnanlyticsEventAndRemoveFromLibrary:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LIBRARYREMOVE_READERM_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId})),this.removeFromLibrary()},triggerSettingsEvent:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LANDED_SETTINGS_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId}))},checkLoginStatusAndFollowOrUnfollowAuthor:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData),e=this.getAuthorData.following?"UNFOLLOW":"FOLLOW";this.triggerAnanlyticsEvent(e+"_INDEX_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.getAuthorData.followCount})),this.getUserDetails.isGuest?(this.setAfterLoginAction({action:this.$route.meta.store+"/followOrUnfollowAuthor"}),this.openLoginModal(this.$route.meta.store,"FOLLOW","READERM")):this.followOrUnfollowAuthor()},goToPreviousChapter:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_READERM_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId,PARENT_ID:this.selectedChapter})),this.$router.push({path:"/read",query:{id:String(this.getPratilipiData.pratilipiId),chapterNo:this.selectedChapter-1}})},goToNextChapter:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_READERM_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId,PARENT_ID:this.selectedChapter})),this.$router.push({path:"/read",query:{id:String(this.getPratilipiData.pratilipiId),chapterNo:this.selectedChapter+1}})},increaseFont:function(){32!==this.fontSize&&(this.fontSize+=2);var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERFONT_SETTINGS_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.fontSize}))},decreaseFont:function(){12!==this.fontSize&&(this.fontSize-=2);var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERFONT_SETTINGS_READER","CONTROL",(0,a.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.fontSize}))},lineHeightSm:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-sm");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"LESS"}))},lineHeightMd:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-md");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"NORMAL"}))},lineHeightLg:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-lg");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"HIGH"}))},themeWhite:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-white"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-white"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-white");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"WHITE"}))},themeBlack:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-black"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-black"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-black");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"NIGHT"}))},themeYellow:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-yellow"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-yellow"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-yellow");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"SEPIA"}))},openReviewModal:function(){t(".review-popout").addClass("show"),t(".overlay-1").fadeIn(),t(".overlay-2").fadeOut(),t(".rating-popout").removeClass("show"),t("body").addClass("modal-open"),this.openRateRev=!0},openRatingModal:function(){this.getUserDetails.authorId!==this.getPratilipiData.author.authorId&&(this.openRateReaderm=!0,t(".rating-popout").addClass("show"),t(".overlay-2").fadeIn(),t(".overlay-1").fadeOut(),t(".review-popout").removeClass("show"),t("body").addClass("modal-open"))},closeReviewModal:function(){t(".review-popout").removeClass("show"),t(".overlay-1").fadeOut(),t("body").removeClass("modal-open"),this.openRateRev=!1},closeRatingModal:function(){this.openRateReaderm=!1,t(".rating-popout").removeClass("show"),t(".overlay-2").fadeOut(),t("body").removeClass("modal-open")},openSidebar:function(){t("#sidebar").addClass("active"),t(".overlay").fadeIn()},closeSidebar:function(){t("#sidebar").removeClass("active"),t(".overlay").fadeOut()},triggerEventAndCloseSidebar:function(e){var i=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_INDEX_READER","CONTROL",(0,a.default)({},i,{USER_ID:this.getUserDetails.userId,PARENT_ID:e})),t("#sidebar").removeClass("active"),t(".overlay").fadeOut()},openShareModal:function(){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CLICKSHRBOOK_READERM_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId})),this.setShareDetails({data:this.getPratilipiData,type:"PRATILIPI",screen_name:"READER",screen_location:"READERM"}),t("#share_modal").modal("show")},updateScroll:function(){this.scrollPosition=window.scrollY}}),computed:(0,a.default)({fontStyleObject:function(){var t={};return t["font-"+this.fontSize]=!0,t}},(0,h.mapGetters)("readerpage",["getPratilipiData","getPratilipiLoadingState","getUserPratilipiData","getUserPratilipiLoadingState","getIndexData","getIndexLoadingState","getPratilipiContent","getPratilipiContentLoadingState","getAuthorData","getAuthorDataLoadingState"]),(0,h.mapGetters)(["getUserDetails"])),created:function(){this.fetchPratilipiDetails(this.$route.query.id),this.getPratilipiData&&this.getPratilipiData.author&&this.fetchAuthorDetails(),this.$route.query.chapterNo&&(this.selectedChapter=Number(this.$route.query.chapterNo))},mounted:function(){t(".read-page").bind("contextmenu",function(t){t.preventDefault()}),t(window).scroll(function(){var e=t(window).scrollTop()/(t(".book-content").height()-t(window).height())*100;t(".reader-progress .progress-bar").css("width",e+"%")}),window.addEventListener("scroll",this.updateScroll)},watch:{"$route.query.id":function(t){this.fetchPratilipiDetails(t)},"$route.query.chapterNo":function(t){t?("PRATILIPI"===this.getPratilipiData.contentType&&(this.fetchPratilipiContentForHTML({pratilipiId:this.getPratilipiData.pratilipiId,chapterNo:Number(t)}),this.selectedChapter=t),"IMAGE"===this.getPratilipiData.contentType&&(this.getPratilipiData.pratilipiId!=this.$route.query.id&&this.fetchPratilipiContentForIMAGE({pratilipiId:this.getPratilipiData.pratilipiId,chapterNo:Number(t)}),this.selectedChapter=t)):this.selectedChapter=1},"getPratilipiData.pratilipiId":function(t,e){this.clearCachedContents(),"PRATILIPI"===this.getPratilipiData.contentType&&this.fetchPratilipiContentForHTML({pratilipiId:t,chapterNo:this.$route.query.chapterNo?Number(this.$route.query.chapterNo):1}),"IMAGE"===this.getPratilipiData.contentType&&this.fetchPratilipiContentForIMAGE({pratilipiId:t,chapterNo:this.$route.query.chapterNo?Number(this.$route.query.chapterNo):1}),this.fetchAuthorDetails()},"getUserDetails.userId":function(){this.fetchPratilipiDetails(this.$route.query.id)},scrollPosition:function(e,i){e>60&&"DOWN"===this.scrollDirection?(t(".header-section").addClass("nav-up"),t(".reader-progress").addClass("progress-up")):e<=60&&(t(".header-section").removeClass("nav-up"),t(".reader-progress").removeClass("progress-up")),e<i?(this.counter++,this.scrollDirection="UP"):this.scrollDirection="DOWN",this.counter>5&&(t(".header-section").removeClass("nav-up"),t(".reader-progress").removeClass("progress-up"),this.counter=0),this.isMobile()&&(t(window).height()+e>t(".content-section").height()+t(".book-bottom-ratings").height()+t(".book-content .social-share").height()+t(".book-navigation").height()+200?(t(".footer-menu").slideDown(),t('[data-toggle="tooltip"]').tooltip("show")):t(".footer-menu").slideUp()),t(window).height()+e>t(".content-section").height()?this.shouldShowOpenInAppStrip=!1:this.shouldShowOpenInAppStrip=!0},getPratilipiLoadingState:function(t){if("LOADING_SUCCESS"===t){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LANDED_READERM_READER","CONTROL",(0,a.default)({},e,{USER_ID:this.getUserDetails.userId}))}}},destroyed:function(){window.removeEventListener("scroll",this.updateScroll)}}}).call(e,i("7t+N"))},BtRm:function(t,e){},NjU1:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.hideHeader?t._e():i("header",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-2 col-sm-4 col-5 p-r-0"},[i("span",{staticClass:"logo",on:{click:t.triggerHomeEvent}}),t._v(" "),i("div",{staticClass:"language-dropdown"},[i("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button",id:"languageDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:t.triggerLanguageEvent}},[t._v("\n                        ప్రతిలిపి\n                        ")]),t._v(" "),i("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"languageDropdown"}},t._l(t.languages,function(e,a){return i("a",{key:a,staticClass:"dropdown-item",class:{isActive:t.getCurrentLanguage().fullName===e.fullName},attrs:{href:"https://"+e.fullName+".pratilipi.com"}},[t._v(t._s(e.languageNative))])}))])]),t._v(" "),i("div",{staticClass:"col-lg-5 col-sm-8 col-7 search-box-wrap"},[i("div",{staticClass:"search-box d-none d-lg-block"},[i("div",{staticClass:"form-group has-feedback",attrs:{id:"search-box-big"}},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"పుస్తకాలు, కథలు, కవితలు మొదలైన వాటి కొరకు వెతకండి..."},on:{input:t.changeSearchText,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.goToSearchPage(e):null},click:t.opendesktopsearch}}),t._v(" "),i("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),i("SearchBox",{attrs:{searchText:t.searchText}})],1),t._v(" "),i("div",{staticClass:"notification-icon",on:{click:t.triggerEventAndResetNotificationCount}},[i("i",{staticClass:"material-icons"},[t._v("notifications")]),t._v(" "),t.notificationCount?i("span",[t._v(t._s(t.notificationCount))]):t._e()])]),t._v(" "),i("div",{staticClass:"d-block d-lg-none search-box search-box-2 text-right"},[i("div",{staticClass:"form-group has-feedback",attrs:{id:"search-box-small"}},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"వెతకండి"},on:{input:t.changeSearchText,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.goToSearchPage(e):null},click:t.openmobilesearch}}),t._v(" "),i("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),i("SearchBox",{attrs:{searchText:t.searchText}})],1),t._v(" "),i("div",{staticClass:"notification-icon",on:{click:t.triggerEventAndResetNotificationCount}},[i("i",{staticClass:"material-icons"},[t._v("notifications")]),t._v(" "),t.notificationCount?i("span",[t._v(t._s(t.notificationCount))]):t._e()])])]),t._v(" "),i("div",{staticClass:"d-none d-lg-block col-lg-5"},[i("MainMenu",{attrs:{userDetails:t.userDetails}})],1)])])]),t._v(" "),i("div",{staticClass:"d-lg-none footer-menu"},[i("MainMenu",{attrs:{userDetails:t.userDetails}})],1)])},staticRenderFns:[]};e.a=a},Ywe1:function(t,e){},ZLwU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("AS2t"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("jOJN");var n=function(t){i("3xgT"),i("htAj")},l=i("VU/8")(s.a,r.a,!1,n,"data-v-fd3f0994",null);e.default=l.exports},htAj:function(t,e){},jOJN:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ReadLayout",[i("div",{staticClass:"read-page"},["LOADING_SUCCESS"===t.getPratilipiLoadingState?i("div",{staticClass:"header-section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"exit-reader tool-icon-1"},[i("router-link",{attrs:{to:t.getPratilipiData.pageUrl}},[i("i",{staticClass:"material-icons"},[t._v("arrow_back")])])],1),t._v(" "),i("div",{staticClass:"book-name tool-icon-8",on:{click:t.openSidebar}},[i("span",[t._v(t._s(t.getPratilipiData.title))]),t._v(" "),i("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])]),t._v(" "),i("div",{staticClass:"right-icons"},[i("div",{staticClass:"settings tool-icon-1"},[i("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"modal","data-target":"#readerOptions"},on:{click:t.triggerSettingsEvent}},[i("i",{staticClass:"material-icons"},[t._v("settings")])])]),t._v(" "),i("div",{staticClass:"more-options tool-icon-1"},[i("button",{staticClass:"btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),i("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("button",{staticClass:"btn report-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#reportModal"}},[t._v("\n                                    రిపోర్ట్\n                                ")])])])])])])]):t._e(),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"readerOptions",tabindex:"-1",role:"dialog","aria-labelledby":"readerOptionsLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body"},[i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),i("div",{staticClass:"options"},[i("div",{staticClass:"option"},[i("span",[t._v("ఫాంట్ సైజ్:")]),t._v(" "),i("div",{staticClass:"buttons"},[i("button",{attrs:{type:"button",name:"button"},on:{click:t.increaseFont}},[i("i",{staticClass:"material-icons"},[t._v("add")])]),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:t.decreaseFont}},[i("i",{staticClass:"material-icons"},[t._v("remove")])])])]),t._v(" "),i("div",{staticClass:"option"},[i("span",[t._v("బ్యాగ్రౌండ్:")]),t._v(" "),i("div",{staticClass:"buttons"},[i("button",{attrs:{type:"button",name:"button"},on:{click:t.themeWhite}},[i("icon",{attrs:{name:"file-text-o",scale:"1.5"}})],1),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:t.themeBlack}},[i("icon",{attrs:{name:"file-text",scale:"1.5"}})],1),t._v(" "),i("button",{staticClass:"yellow",attrs:{type:"button",name:"button"},on:{click:t.themeYellow}},[i("icon",{attrs:{name:"file-text-o",scale:"1.5"}})],1)])]),t._v(" "),i("div",{staticClass:"option"},[i("span",[t._v("లైన్ స్పేసింగ్:")]),t._v(" "),i("div",{staticClass:"buttons"},[i("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightSm}},[i("span",{staticClass:"lh-icon lh-sm-icon"})]),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightMd}},[i("span",{staticClass:"lh-icon lh-md-icon"})]),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightLg}},[i("span",{staticClass:"lh-icon lh-lg-icon"})])])])])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"reportModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v("రిపోర్ట్ యొక్క టైటిల్")]),t._v(" "),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("i",{staticClass:"material-icons"},[t._v("close")])])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"reportModalTextarea"}},[t._v("సమస్య")]),t._v(" "),i("textarea",{staticClass:"form-control",attrs:{id:"reportModalTextarea",rows:"3",placeholder:"సమస్య"}})]),t._v(" "),i("button",{staticClass:"btn btn-primary btn-submit",attrs:{type:"submit"}},[t._v("సమర్పించండి")]),t._v(" "),i("button",{staticClass:"cancel",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t._v("రద్దు చేయండి")])])])])])]),t._v(" "),i("div",{staticClass:"book-content"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t.getPratilipiContent.length>0&&t.getPratilipiData.pratilipiId==t.$route.query.id?i("div",{staticClass:"col-12 p-0"},[t._l(t.getIndexData,function(e){return e.chapterNo==t.selectedChapter?i("h2",{key:e.chapterId,staticClass:"chapter-title p-lr-15"},[t._v("\n                                "+t._s(e.title||e.chapterNo)+"\n                        ")]):t._e()}),t._v(" "),t._l(t.getPratilipiContent,function(e){return e.chapterNo==t.selectedChapter?i("div",{key:e.chapterNo,staticClass:"content-section lh-md p-lr-15",class:t.fontStyleObject,domProps:{innerHTML:t._s(e.content)}}):t._e()}),t._v(" "),"LOADING_SUCCESS"!==t.getPratilipiContentLoadingState?i("Spinner"):t._e(),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiContentLoadingState?i("div",{staticClass:"book-navigation p-lr-15"},[1!=t.selectedChapter?i("div",{staticClass:"prev",on:{click:t.goToPreviousChapter}},[t._v("మునుపటి అధ్యాయం")]):t._e(),t._v(" "),t.selectedChapter!=t.getIndexData.length?i("div",{staticClass:"next",on:{click:t.goToNextChapter}},[t._v("తదుపరి అధ్యాయం")]):t._e()]):t._e(),t._v(" "),t.selectedChapter==t.getIndexData.length?i("ShareStrip",{attrs:{data:t.getPratilipiData,type:"PRATILIPI"}}):t._e(),t._v(" "),i("div",{staticClass:"book-bottom-ratings p-lr-15"},[t.selectedChapter!=t.getIndexData.length||t.openRateReaderm||t.openRateRev?t._e():i("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,userPratilipiData:t.getUserPratilipiData,haveInfiniteScroll:!0,screenName:"READER",screenLocation:"BOOKEND",pratilipiData:t.getPratilipiData}})],1),t._v(" "),t.selectedChapter==t.getIndexData.length?i("div",{staticClass:"book-recomendations p-r-10"},[t.getPratilipiData&&t.getPratilipiData.pratilipiId?i("Recommendation",{attrs:{contextId:t.getPratilipiData.pratilipiId,context:"summaryPage",screenName:"READER",screenLocation:"RECOMMENDBOOK",experimentId:"WGEN005"}}):t._e()],1):t._e()],2):t._e()])])]),t._v(" "),i("div",{staticClass:"footer-section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"review-count col-3",on:{click:t.openReviewModal}},[i("i",{staticClass:"material-icons"},[t._v("comment")]),t._v(" "),i("span",[t._v(t._s(t.getPratilipiData.reviewCount))])]),t._v(" "),i("div",{staticClass:"rating-count col-3",on:{click:t.openRatingModal}},[i("i",{staticClass:"material-icons"},[t._v("star_rate")]),t._v(" "),i("span",[t._v(t._s(t.getPratilipiData.ratingCount))])]),t._v(" "),i("div",{staticClass:"add-to-lib col-3"},[t.getUserPratilipiData.addedToLib?i("span",{on:{click:t.triggerAnanlyticsEventAndRemoveFromLibrary}},[i("i",{staticClass:"material-icons"},[t._v("bookmark")]),t._v(" "),i("i",{staticClass:"material-icons stacked"},[t._v("check")])]):i("span",{on:{click:function(e){t.addPratilipiToLibrary(t.getPratilipiData.pratilipiId)}}},[i("i",{staticClass:"material-icons"},[t._v("bookmark_border")]),t._v(" "),i("i",{staticClass:"material-icons stacked grey"},[t._v("add")])])]),t._v(" "),i("div",{staticClass:"share-btn col-3",on:{click:t.openShareModal}},[i("i",{staticClass:"material-icons"},[t._v("share")])])])])]),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiLoadingState?i("nav",{attrs:{id:"sidebar"}},[i("div",{attrs:{id:"dismiss"},on:{click:t.closeSidebar}},[i("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),i("div",{staticClass:"book-info"},[i("div",{staticClass:"book-cover"},[i("img",{attrs:{src:t.getPratilipiData.coverImageUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"book-name"},[t._v(t._s(t.getPratilipiData.title))]),t._v(" "),i("router-link",{staticClass:"author-link",attrs:{to:t.getPratilipiData.author.pageUrl}},[i("span",{staticClass:"auth-name"},[t._v(t._s(t.getPratilipiData.author.displayName))])]),t._v(" "),t.getAuthorData.following?i("div",{staticClass:"follow-btn-w-count"},[i("button",{on:{click:t.checkLoginStatusAndFollowOrUnfollowAuthor}},[i("i",{staticClass:"material-icons"},[t._v("check")]),t._v(" అనుసరిస్తున్నారు")]),i("span",[i("b",[t._v(t._s(t.getAuthorData.followCount))])])]):i("div",{staticClass:"follow-btn-w-count"},[i("button",{on:{click:t.checkLoginStatusAndFollowOrUnfollowAuthor}},[i("i",{staticClass:"material-icons"},[t._v("person_add")]),t._v("అనుసరించండి\n                    ")]),i("span",[i("b",[t._v(t._s(t.getAuthorData.followCount))])])])],1),t._v(" "),i("div",{staticClass:"book-index"},[i("ul",t._l(t.getIndexData,function(e){return i("li",{key:e.chapterId,class:{isActive:e.chapterNo===t.selectedChapter}},[i("router-link",{attrs:{to:{path:"/read",query:{id:String(t.getPratilipiData.pratilipiId),chapterNo:e.chapterNo}}},nativeOn:{click:function(i){t.triggerEventAndCloseSidebar(e.chapterNo)}}},[t._v("\n                                అధ్యాయము "+t._s(e.title||e.chapterNo)+"\n                            ")])],1)}))])]):t._e(),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},["LOADING_SUCCESS"===t.getPratilipiLoadingState?i("div",{staticClass:"review-popout reader-review-popout"},[i("button",{staticClass:"close-review",attrs:{type:"button",name:"button"},on:{click:t.closeReviewModal}},[i("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),t.openRateRev?i("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,haveInfiniteScroll:!0,screenName:"READER",screenLocation:"RATEREV",pratilipiData:t.getPratilipiData,userPratilipiData:t.getUserPratilipiData}}):t._e()],1):t._e(),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiLoadingState?i("div",{staticClass:"rating-popout"},[i("button",{staticClass:"close-review",attrs:{type:"button",name:"button"},on:{click:t.closeRatingModal}},[i("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),t.openRateReaderm?i("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,haveInfiniteScroll:!1,screenName:"READER",screenLocation:"READERM",pratilipiData:t.getPratilipiData,userPratilipiData:t.getUserPratilipiData}}):t._e()],1):t._e()])]),t._v(" "),t.isAndroid()&&"LOADING_SUCCESS"===t.getPratilipiLoadingState?i("OpenInApp",{attrs:{isVisible:t.shouldShowOpenInAppStrip,pratilipiData:t.getPratilipiData}}):t._e(),t._v(" "),i("div",{staticClass:"overlay",on:{click:t.closeSidebar}}),t._v(" "),i("div",{staticClass:"overlay-1",on:{click:t.closeReviewModal}}),t._v(" "),i("div",{staticClass:"overlay-2",on:{click:t.closeRatingModal}}),t._v(" "),i("div",{staticClass:"reader-progress"},[i("div",{staticClass:"progress-bar"})])],1)])},staticRenderFns:[]};e.a=a},"oD+v":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(i("Dd8w")),s=d(i("VeAd")),o=d(i("fenB")),r=d(i("oOJi")),n=d(i("yL53")),l=(d(i("qI5z")),d(i("msXN"))),c=i("NYxO");function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{LoginModal:s.default,ShareModal:o.default,Header:r.default,Alert:n.default},mixins:[l.default],computed:(0,a.default)({},(0,c.mapGetters)(["getUserDetails","getNotificationCount"])),methods:(0,a.default)({},(0,c.mapActions)(["fetchUserDetails","fetchInitialNotifications"])),watch:{"getUserDetails.userId":function(t){t&&this.fetchInitialNotifications({language:this.getCurrentLanguage().fullName.toUpperCase(),resultCount:10})}}}},oOJi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("s3jX"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("NjU1");var n=function(t){i("Ywe1"),i("BtRm")},l=i("VU/8")(s.a,r.a,!1,n,"data-v-4d15742a",null);e.default=l.exports},s3jX:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=c(i("Dd8w")),s=c(i("qI5z")),o=c(i("msXN")),r=c(i("veuj")),n=c(i("4vg4")),l=i("NYxO");function c(t){return t&&t.__esModule?t:{default:t}}e.default={props:{userDetails:{type:Object,required:!0},notificationCount:{type:Number},hideHeader:{type:Boolean}},mixins:[o.default],data:function(){return{languages:s.default.LANGUAGES,isCurrentLanguage:function(t){return"te"===t},searchText:"",scrollPosition:null,scrollDirection:null,counter:0}},computed:(0,a.default)({},(0,l.mapGetters)(["getUserDetails"])),components:{SearchBox:r.default,MainMenu:n.default},methods:(0,a.default)({changeSearchText:function(t){this.searchText=t.target.value},triggerHomeEvent:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GOHOME_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t}),this.$router.push("/")},triggerLanguageEvent:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GOLANGUAGE_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t})},goToSearchPage:function(){this.triggerAnanlyticsEvent("SEARCH_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.searchText}),this.$router.push({name:"Search_Page",query:{q:this.searchText}}),t("#search-box-small .search-dropdown").hide(),t("#search-box-big .search-dropdown").hide()},opendesktopsearch:function(){t("#search-box-big .search-dropdown").show(),this.triggerAnanlyticsEvent("LANDED_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId}),t(document).mouseup(function(e){var i=t(".search-dropdown");i.is(e.target)||0!==i.has(e.target).length||i.hide()})},openmobilesearch:function(){t("#search-box-small .search-dropdown").show(),this.triggerAnanlyticsEvent("LANDED_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId}),t(document).mouseup(function(e){var i=t(".search-dropdown");i.is(e.target)||0!==i.has(e.target).length||i.hide()})},triggerEventAndResetNotificationCount:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GONOTIFPAGE_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t}),this.$router.push("/notifications"),this.resetNotificationCount}},(0,l.mapActions)(["resetNotificationCount"]),{updateScroll:function(){this.scrollPosition=window.scrollY}}),watch:{scrollPosition:function(e,i){e>70&&"DOWN"===this.scrollDirection?t("header").addClass("nav-up"):e<=70&&t("header").removeClass("nav-up"),e<i?(this.counter++,this.scrollDirection="UP"):this.scrollDirection="DOWN",this.counter>5&&(t("header").removeClass("nav-up"),this.counter=0)}},mounted:function(){window.addEventListener("scroll",this.updateScroll),this.isMobile()&&(t(document).on("focus","input",function(){t(".footer-menu").css("height","0")}),t(document).on("blur","input",function(){t(".footer-menu").css("height","51px")})),"/notifications"===this.$route.path&&t(".notification-icon").addClass("active")},destroyed:function(){window.removeEventListener("scroll",this.updateScroll)}}}).call(e,i("7t+N"))},vjWy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("oD+v"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("3j6G");var n=function(t){i("5jJ/")},l=i("VU/8")(s.a,r.a,!1,n,null,null);e.default=l.exports}});
//# sourceMappingURL=5.ef0d5e0097163ce63ffb.js.map