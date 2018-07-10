webpackJsonp([2],{"5V7q":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(a("Dd8w")),s=d(a("VeAd")),o=d(a("fenB")),r=d(a("MCxd")),n=d(a("yL53")),l=(d(a("qI5z")),d(a("msXN"))),c=a("NYxO");function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{LoginModal:s.default,ShareModal:o.default,Header:r.default,Alert:n.default},mixins:[l.default],computed:(0,i.default)({},(0,c.mapGetters)(["getUserDetails","getNotificationCount"])),methods:(0,i.default)({},(0,c.mapActions)(["fetchUserDetails","fetchInitialNotifications"])),watch:{"getUserDetails.userId":function(t){t&&this.fetchInitialNotifications({language:this.getCurrentLanguage().fullName.toUpperCase(),resultCount:10})}}}},"8xjG":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=c(a("Dd8w")),s=c(a("qI5z")),o=c(a("msXN")),r=c(a("veuj")),n=c(a("4vg4")),l=a("NYxO");function c(t){return t&&t.__esModule?t:{default:t}}e.default={props:{userDetails:{type:Object,required:!0},notificationCount:{type:Number},hideHeader:{type:Boolean}},mixins:[o.default],data:function(){return{languages:s.default.LANGUAGES,isCurrentLanguage:function(t){return"ml"===t},searchText:"",scrollPosition:null,scrollDirection:null,counter:0}},computed:(0,i.default)({},(0,l.mapGetters)(["getUserDetails"])),components:{SearchBox:r.default,MainMenu:n.default},methods:(0,i.default)({changeSearchText:function(t){this.searchText=t.target.value},triggerHomeEvent:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GOHOME_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t}),this.$router.push("/")},triggerLanguageEvent:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GOLANGUAGE_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t})},goToSearchPage:function(){this.triggerAnanlyticsEvent("SEARCH_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.searchText}),this.$router.push({name:"Search_Page",query:{q:this.searchText}}),t("#search-box-small .search-dropdown").hide(),t("#search-box-big .search-dropdown").hide()},opendesktopsearch:function(){t("#search-box-big .search-dropdown").show(),this.triggerAnanlyticsEvent("LANDED_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId}),t(document).mouseup(function(e){var a=t(".search-dropdown");a.is(e.target)||0!==a.has(e.target).length||a.hide()})},openmobilesearch:function(){t("#search-box-small .search-dropdown").show(),this.triggerAnanlyticsEvent("LANDED_SEARCHM_SEARCH","CONTROL",{USER_ID:this.getUserDetails.userId}),t(document).mouseup(function(e){var a=t(".search-dropdown");a.is(e.target)||0!==a.has(e.target).length||a.hide()})},triggerEventAndResetNotificationCount:function(){var t=this.getAnalyticsPageSource(this.$route.meta.store);this.triggerAnanlyticsEvent("GONOTIFPAGE_HEADER_GLOBAL","CONTROL",{USER_ID:this.getUserDetails.userId,SCREEN_NAME:t}),this.$router.push("/notifications"),this.resetNotificationCount}},(0,l.mapActions)(["resetNotificationCount"]),{updateScroll:function(){this.scrollPosition=window.scrollY}}),watch:{scrollPosition:function(e,a){e>70&&"DOWN"===this.scrollDirection?t("header").addClass("nav-up"):e<=70&&t("header").removeClass("nav-up"),e<a?(this.counter++,this.scrollDirection="UP"):this.scrollDirection="DOWN",this.counter>5&&(t("header").removeClass("nav-up"),this.counter=0)}},mounted:function(){window.addEventListener("scroll",this.updateScroll),this.isMobile()&&(t(document).on("focus","input",function(){t(".footer-menu").css("height","0")}),t(document).on("blur","input",function(){t(".footer-menu").css("height","51px")})),"/notifications"===this.$route.path&&t(".notification-icon").addClass("active")},destroyed:function(){window.removeEventListener("scroll",this.updateScroll)}}}).call(e,a("7t+N"))},Cgbf:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hideHeader?t._e():a("header",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2 col-sm-4 col-5 p-r-0"},[a("span",{staticClass:"logo",on:{click:t.triggerHomeEvent}}),t._v(" "),a("div",{staticClass:"language-dropdown"},[a("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button",id:"languageDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:t.triggerLanguageEvent}},[t._v("\n                        പ്രതിലിപി\n                        ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"languageDropdown"}},t._l(t.languages,function(e,i){return a("a",{key:i,staticClass:"dropdown-item",class:{isActive:t.getCurrentLanguage().fullName===e.fullName},attrs:{href:"https://"+e.fullName+".pratilipi.com"}},[t._v(t._s(e.languageNative))])}))])]),t._v(" "),a("div",{staticClass:"col-lg-5 col-sm-8 col-7 search-box-wrap"},[a("div",{staticClass:"search-box d-none d-lg-block"},[a("div",{staticClass:"form-group has-feedback",attrs:{id:"search-box-big"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"പുസ്തകങ്ങള്‍,കഥകള്‍,കവിതകള്‍ തുടങ്ങിയവയ്ക്കായി തിരയൂ ..."},on:{input:t.changeSearchText,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.goToSearchPage(e):null},click:t.opendesktopsearch}}),t._v(" "),a("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),a("SearchBox",{attrs:{searchText:t.searchText}})],1),t._v(" "),a("div",{staticClass:"notification-icon",on:{click:t.triggerEventAndResetNotificationCount}},[a("i",{staticClass:"material-icons"},[t._v("notifications")]),t._v(" "),t.notificationCount?a("span",[t._v(t._s(t.notificationCount))]):t._e()])]),t._v(" "),a("div",{staticClass:"d-block d-lg-none search-box search-box-2 text-right"},[a("div",{staticClass:"form-group has-feedback",attrs:{id:"search-box-small"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"തിരയൂ"},on:{input:t.changeSearchText,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.goToSearchPage(e):null},click:t.openmobilesearch}}),t._v(" "),a("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),a("SearchBox",{attrs:{searchText:t.searchText}})],1),t._v(" "),a("div",{staticClass:"notification-icon",on:{click:t.triggerEventAndResetNotificationCount}},[a("i",{staticClass:"material-icons"},[t._v("notifications")]),t._v(" "),t.notificationCount?a("span",[t._v(t._s(t.notificationCount))]):t._e()])])]),t._v(" "),a("div",{staticClass:"d-none d-lg-block col-lg-5"},[a("MainMenu",{attrs:{userDetails:t.userDetails}})],1)])])]),t._v(" "),a("div",{staticClass:"d-lg-none footer-menu"},[a("MainMenu",{attrs:{userDetails:t.userDetails}})],1)])},staticRenderFns:[]};e.a=i},DhEg:function(t,e){},GNDF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("yWL+"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var r=a("IUBM");var n=function(t){a("dM+K"),a("wLVT")},l=a("VU/8")(s.a,r.a,!1,n,"data-v-711ec215",null);e.default=l.exports},IUBM:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ReadLayout",[a("div",{staticClass:"read-page"},["LOADING_SUCCESS"===t.getPratilipiLoadingState?a("div",{staticClass:"header-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"exit-reader tool-icon-1"},[a("router-link",{attrs:{to:t.getPratilipiData.pageUrl}},[a("i",{staticClass:"material-icons"},[t._v("arrow_back")])])],1),t._v(" "),a("div",{staticClass:"book-name tool-icon-8",on:{click:t.openSidebar}},[a("span",[t._v(t._s(t.getPratilipiData.title))]),t._v(" "),a("i",{staticClass:"material-icons"},[t._v("arrow_drop_down")])]),t._v(" "),a("div",{staticClass:"right-icons"},[a("div",{staticClass:"settings tool-icon-1"},[a("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"modal","data-target":"#readerOptions"},on:{click:t.triggerSettingsEvent}},[a("i",{staticClass:"material-icons"},[t._v("settings")])])]),t._v(" "),a("div",{staticClass:"more-options tool-icon-1"},[a("button",{staticClass:"btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("button",{staticClass:"btn report-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#reportModal"}},[t._v("\n                                    റിപ്പോർട്ട് ചെയ്യുക\n                                ")])])])])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"readerOptions",tabindex:"-1",role:"dialog","aria-labelledby":"readerOptionsLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),a("div",{staticClass:"options"},[a("div",{staticClass:"option"},[a("span",[t._v("അക്ഷരങ്ങളുടെ വലിപ്പം:")]),t._v(" "),a("div",{staticClass:"buttons"},[a("button",{attrs:{type:"button",name:"button"},on:{click:t.increaseFont}},[a("i",{staticClass:"material-icons"},[t._v("add")])]),t._v(" "),a("button",{attrs:{type:"button",name:"button"},on:{click:t.decreaseFont}},[a("i",{staticClass:"material-icons"},[t._v("remove")])])])]),t._v(" "),a("div",{staticClass:"option"},[a("span",[t._v("ബാക്ക്ഗ്രൗണ്ട്:")]),t._v(" "),a("div",{staticClass:"buttons"},[a("button",{attrs:{type:"button",name:"button"},on:{click:t.themeWhite}},[a("icon",{attrs:{name:"file-text-o",scale:"1.5"}})],1),t._v(" "),a("button",{attrs:{type:"button",name:"button"},on:{click:t.themeBlack}},[a("icon",{attrs:{name:"file-text",scale:"1.5"}})],1),t._v(" "),a("button",{staticClass:"yellow",attrs:{type:"button",name:"button"},on:{click:t.themeYellow}},[a("icon",{attrs:{name:"file-text-o",scale:"1.5"}})],1)])]),t._v(" "),a("div",{staticClass:"option"},[a("span",[t._v("ലൈന്‍ സ്പേസ്:")]),t._v(" "),a("div",{staticClass:"buttons"},[a("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightSm}},[a("span",{staticClass:"lh-icon lh-sm-icon"})]),t._v(" "),a("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightMd}},[a("span",{staticClass:"lh-icon lh-md-icon"})]),t._v(" "),a("button",{attrs:{type:"button",name:"button"},on:{click:t.lineHeightLg}},[a("span",{staticClass:"lh-icon lh-lg-icon"})])])])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"reportModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("പ്രധാന പ്രശ്നം")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("i",{staticClass:"material-icons"},[t._v("close")])])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"reportModalTextarea"}},[t._v("പ്രശ്നം വിശദമായി")]),t._v(" "),a("textarea",{staticClass:"form-control",attrs:{id:"reportModalTextarea",rows:"3",placeholder:"പ്രശ്നം വിശദമായി"}})]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-submit",attrs:{type:"submit"}},[t._v("സമര്‍പ്പിക്കുക")]),t._v(" "),a("button",{staticClass:"cancel",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t._v("വേണ്ടെന്നു വയ്ക്കുക")])])])])])]),t._v(" "),a("div",{staticClass:"book-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t.getPratilipiContent.length>0&&t.getPratilipiData.pratilipiId==t.$route.query.id?a("div",{staticClass:"col-12 p-0"},[t._l(t.getIndexData,function(e){return e.chapterNo==t.selectedChapter?a("h2",{key:e.chapterId,staticClass:"chapter-title p-lr-15"},[t._v("\n                                "+t._s(e.title||e.chapterNo)+"\n                        ")]):t._e()}),t._v(" "),t._l(t.getPratilipiContent,function(e){return e.chapterNo==t.selectedChapter?a("div",{key:e.chapterNo,staticClass:"content-section lh-md p-lr-15",class:t.fontStyleObject,domProps:{innerHTML:t._s(e.content)}}):t._e()}),t._v(" "),"LOADING_SUCCESS"!==t.getPratilipiContentLoadingState?a("Spinner"):t._e(),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiContentLoadingState?a("div",{staticClass:"book-navigation p-lr-15"},[1!=t.selectedChapter?a("div",{staticClass:"prev",on:{click:t.goToPreviousChapter}},[t._v("മുന്‍പത്തെ അധ്യായം")]):t._e(),t._v(" "),t.selectedChapter!=t.getIndexData.length?a("div",{staticClass:"next",on:{click:t.goToNextChapter}},[t._v("അടുത്ത അദ്ധ്യായം")]):t._e()]):t._e(),t._v(" "),t.selectedChapter==t.getIndexData.length?a("ShareStrip",{attrs:{data:t.getPratilipiData,type:"PRATILIPI"}}):t._e(),t._v(" "),a("div",{staticClass:"book-bottom-ratings p-lr-15"},[t.selectedChapter!=t.getIndexData.length||t.openRateReaderm||t.openRateRev?t._e():a("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,userPratilipiData:t.getUserPratilipiData,haveInfiniteScroll:!0,screenName:"READER",screenLocation:"BOOKEND",pratilipiData:t.getPratilipiData}})],1),t._v(" "),t.selectedChapter==t.getIndexData.length?a("div",{staticClass:"book-recomendations p-r-10"},[t.getPratilipiData&&t.getPratilipiData.pratilipiId?a("Recommendation",{attrs:{contextId:t.getPratilipiData.pratilipiId,context:"summaryPage",screenName:"READER",screenLocation:"RECOMMENDBOOK",experimentId:"WGEN008"}}):t._e()],1):t._e()],2):t._e()])])]),t._v(" "),a("div",{staticClass:"footer-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"review-count col-3",on:{click:t.openReviewModal}},[a("i",{staticClass:"material-icons"},[t._v("comment")]),t._v(" "),a("span",[t._v(t._s(t.getPratilipiData.reviewCount))])]),t._v(" "),a("div",{staticClass:"rating-count col-3",on:{click:t.openRatingModal}},[a("i",{staticClass:"material-icons"},[t._v("star_rate")]),t._v(" "),a("span",[t._v(t._s(t.getPratilipiData.ratingCount))])]),t._v(" "),a("div",{staticClass:"add-to-lib col-3"},[t.getUserPratilipiData.addedToLib?a("span",{on:{click:t.triggerAnanlyticsEventAndRemoveFromLibrary}},[a("i",{staticClass:"material-icons"},[t._v("bookmark")]),t._v(" "),a("i",{staticClass:"material-icons stacked"},[t._v("check")])]):a("span",{on:{click:function(e){t.addPratilipiToLibrary(t.getPratilipiData.pratilipiId)}}},[a("i",{staticClass:"material-icons"},[t._v("bookmark_border")]),t._v(" "),a("i",{staticClass:"material-icons stacked grey"},[t._v("add")])])]),t._v(" "),a("div",{staticClass:"share-btn col-3",on:{click:t.openShareModal}},[a("i",{staticClass:"material-icons"},[t._v("share")])])])])]),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiLoadingState?a("nav",{attrs:{id:"sidebar"}},[a("div",{attrs:{id:"dismiss"},on:{click:t.closeSidebar}},[a("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),a("div",{staticClass:"book-info"},[a("div",{staticClass:"book-cover"},[a("img",{attrs:{src:t.getPratilipiData.coverImageUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"book-name"},[t._v(t._s(t.getPratilipiData.title))]),t._v(" "),a("router-link",{staticClass:"author-link",attrs:{to:t.getPratilipiData.author.pageUrl}},[a("span",{staticClass:"auth-name"},[t._v(t._s(t.getPratilipiData.author.displayName))])]),t._v(" "),t.getAuthorData.following?a("div",{staticClass:"follow-btn-w-count"},[a("button",{on:{click:t.checkLoginStatusAndFollowOrUnfollowAuthor}},[a("i",{staticClass:"material-icons"},[t._v("check")]),t._v(" ഫോളോയിംഗ്")]),a("span",[a("b",[t._v(t._s(t.getAuthorData.followCount))])])]):a("div",{staticClass:"follow-btn-w-count"},[a("button",{on:{click:t.checkLoginStatusAndFollowOrUnfollowAuthor}},[a("i",{staticClass:"material-icons"},[t._v("person_add")]),t._v("ഫോളോ  ചെയ്യൂ\n                    ")]),a("span",[a("b",[t._v(t._s(t.getAuthorData.followCount))])])])],1),t._v(" "),a("div",{staticClass:"book-index"},[a("ul",t._l(t.getIndexData,function(e){return a("li",{key:e.chapterId,class:{isActive:e.chapterNo===t.selectedChapter}},[a("router-link",{attrs:{to:{path:"/read",query:{id:String(t.getPratilipiData.pratilipiId),chapterNo:e.chapterNo}}},nativeOn:{click:function(a){t.triggerEventAndCloseSidebar(e.chapterNo)}}},[t._v("\n                                അദ്ധ്യായം "+t._s(e.title||e.chapterNo)+"\n                            ")])],1)}))])]):t._e(),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},["LOADING_SUCCESS"===t.getPratilipiLoadingState?a("div",{staticClass:"review-popout reader-review-popout"},[a("button",{staticClass:"close-review",attrs:{type:"button",name:"button"},on:{click:t.closeReviewModal}},[a("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),t.openRateRev?a("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,haveInfiniteScroll:!0,screenName:"READER",screenLocation:"RATEREV",pratilipiData:t.getPratilipiData,userPratilipiData:t.getUserPratilipiData}}):t._e()],1):t._e(),t._v(" "),"LOADING_SUCCESS"===t.getPratilipiLoadingState?a("div",{staticClass:"rating-popout"},[a("button",{staticClass:"close-review",attrs:{type:"button",name:"button"},on:{click:t.closeRatingModal}},[a("i",{staticClass:"material-icons"},[t._v("close")])]),t._v(" "),t.openRateReaderm?a("Reviews",{attrs:{pratilipiId:t.getPratilipiData.pratilipiId,authorId:t.getPratilipiData.author.authorId,haveInfiniteScroll:!1,screenName:"READER",screenLocation:"READERM",pratilipiData:t.getPratilipiData,userPratilipiData:t.getUserPratilipiData}}):t._e()],1):t._e()])]),t._v(" "),t.isAndroid()&&"LOADING_SUCCESS"===t.getPratilipiLoadingState?a("OpenInApp",{attrs:{isVisible:t.shouldShowOpenInAppStrip,pratilipiData:t.getPratilipiData}}):t._e(),t._v(" "),a("div",{staticClass:"overlay",on:{click:t.closeSidebar}}),t._v(" "),a("div",{staticClass:"overlay-1",on:{click:t.closeReviewModal}}),t._v(" "),a("div",{staticClass:"overlay-2",on:{click:t.closeRatingModal}}),t._v(" "),a("div",{staticClass:"reader-progress"},[a("div",{staticClass:"progress-bar"})])],1)])},staticRenderFns:[]};e.a=i},MCxd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("8xjG"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var r=a("Cgbf");var n=function(t){a("r5Fr"),a("DhEg")},l=a("VU/8")(s.a,r.a,!1,n,"data-v-0e342fda",null);e.default=l.exports},"dM+K":function(t,e){},fwz0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("5V7q"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var r=a("mNWH");var n=function(t){a("mT00")},l=a("VU/8")(s.a,r.a,!1,n,null,null);e.default=l.exports},mNWH:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{userDetails:this.getUserDetails,hideHeader:!0}}),this._v(" "),this._t("default"),this._v(" "),e("LoginModal"),this._v(" "),e("ShareModal"),this._v(" "),e("Alert",{attrs:{isReader:!0}})],2)},staticRenderFns:[]};e.a=i},mT00:function(t,e){},r5Fr:function(t,e){},wLVT:function(t,e){},"yWL+":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=u(a("Dd8w")),s=u(a("fwz0")),o=u(a("+jyM")),r=u(a("msXN"));a("0My8"),a("z/TA"),a("xfIr"),a("acYx"),a("SD0l"),a("OKeL"),a("vwXs");var n=u(a("hr/h")),l=u(a("hMKZ")),c=u(a("9Eii")),d=u(a("S0KR")),h=a("NYxO");function u(t){return t&&t.__esModule?t:{default:t}}e.default={components:{ReadLayout:s.default,Spinner:o.default,Reviews:n.default,Recommendation:l.default,ShareStrip:d.default,OpenInApp:c.default},mixins:[r.default],data:function(){return{fontSize:16,selectedChapter:1,scrollPosition:null,scrollDirection:null,counter:0,openRateRev:!1,openRateReaderm:!1,rateRev:"RATEREV",shouldShowOpenInAppStrip:!0}},methods:(0,i.default)({},(0,h.mapActions)("readerpage",["fetchPratilipiDetails","fetchPratilipiContentForHTML","clearCachedContents","addToLibrary","removeFromLibrary","fetchPratilipiContentForIMAGE","fetchAuthorDetails","followOrUnfollowAuthor"]),(0,h.mapActions)(["setShareDetails","setAfterLoginAction"]),{addPratilipiToLibrary:function(t){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LIBRARYADD_READERM_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId})),this.getUserDetails.isGuest?(this.setAfterLoginAction({action:this.$route.meta.store+"/addToLibrary",data:t}),this.openLoginModal(this.$route.meta.store,"LIBRARYADD","READERM")):this.addToLibrary(t)},triggerAnanlyticsEventAndRemoveFromLibrary:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LIBRARYREMOVE_READERM_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId})),this.removeFromLibrary()},triggerSettingsEvent:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LANDED_SETTINGS_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId}))},checkLoginStatusAndFollowOrUnfollowAuthor:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData),e=this.getAuthorData.following?"UNFOLLOW":"FOLLOW";this.triggerAnanlyticsEvent(e+"_INDEX_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.getAuthorData.followCount})),this.getUserDetails.isGuest?(this.setAfterLoginAction({action:this.$route.meta.store+"/followOrUnfollowAuthor"}),this.openLoginModal(this.$route.meta.store,"FOLLOW","READERM")):this.followOrUnfollowAuthor()},goToPreviousChapter:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_READERM_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId,PARENT_ID:this.selectedChapter})),this.$router.push({path:"/read",query:{id:String(this.getPratilipiData.pratilipiId),chapterNo:this.selectedChapter-1}})},goToNextChapter:function(){var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_READERM_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId,PARENT_ID:this.selectedChapter})),this.$router.push({path:"/read",query:{id:String(this.getPratilipiData.pratilipiId),chapterNo:this.selectedChapter+1}})},increaseFont:function(){32!==this.fontSize&&(this.fontSize+=2);var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERFONT_SETTINGS_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.fontSize}))},decreaseFont:function(){12!==this.fontSize&&(this.fontSize-=2);var t=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERFONT_SETTINGS_READER","CONTROL",(0,i.default)({},t,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:this.fontSize}))},lineHeightSm:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-sm");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"LESS"}))},lineHeightMd:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-md");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"NORMAL"}))},lineHeightLg:function(){t(".book-content .content-section").removeClass("lh-sm lh-md lh-lg"),t(".book-content .content-section").addClass("lh-lg");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERGAP_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"HIGH"}))},themeWhite:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-white"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-white"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-white");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"WHITE"}))},themeBlack:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-black"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-black"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-black");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"NIGHT"}))},themeYellow:function(){t(".read-page").removeClass("theme-white theme-black theme-yellow"),t(".read-page").addClass("theme-yellow"),t(".header-section").removeClass("theme-white theme-black theme-yellow"),t(".header-section").addClass("theme-yellow"),t(".footer-section").removeClass("theme-white theme-black theme-yellow"),t(".footer-section").addClass("theme-yellow");var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("READERBACKGROUND_SETTINGS_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId,ENTITY_VALUE:"SEPIA"}))},openReviewModal:function(){t(".review-popout").addClass("show"),t(".overlay-1").fadeIn(),t(".overlay-2").fadeOut(),t(".rating-popout").removeClass("show"),t("body").addClass("modal-open"),this.openRateRev=!0},openRatingModal:function(){this.getUserDetails.authorId!==this.getPratilipiData.author.authorId&&(this.openRateReaderm=!0,t(".rating-popout").addClass("show"),t(".overlay-2").fadeIn(),t(".overlay-1").fadeOut(),t(".review-popout").removeClass("show"),t("body").addClass("modal-open"))},closeReviewModal:function(){t(".review-popout").removeClass("show"),t(".overlay-1").fadeOut(),t("body").removeClass("modal-open"),this.openRateRev=!1},closeRatingModal:function(){this.openRateReaderm=!1,t(".rating-popout").removeClass("show"),t(".overlay-2").fadeOut(),t("body").removeClass("modal-open")},openSidebar:function(){t("#sidebar").addClass("active"),t(".overlay").fadeIn()},closeSidebar:function(){t("#sidebar").removeClass("active"),t(".overlay").fadeOut()},triggerEventAndCloseSidebar:function(e){var a=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CHANGECHAPTER_INDEX_READER","CONTROL",(0,i.default)({},a,{USER_ID:this.getUserDetails.userId,PARENT_ID:e})),t("#sidebar").removeClass("active"),t(".overlay").fadeOut()},openShareModal:function(){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("CLICKSHRBOOK_READERM_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId})),this.setShareDetails({data:this.getPratilipiData,type:"PRATILIPI",screen_name:"READER",screen_location:"READERM"}),t("#share_modal").modal("show")},updateScroll:function(){this.scrollPosition=window.scrollY}}),computed:(0,i.default)({fontStyleObject:function(){var t={};return t["font-"+this.fontSize]=!0,t}},(0,h.mapGetters)("readerpage",["getPratilipiData","getPratilipiLoadingState","getUserPratilipiData","getUserPratilipiLoadingState","getIndexData","getIndexLoadingState","getPratilipiContent","getPratilipiContentLoadingState","getAuthorData","getAuthorDataLoadingState"]),(0,h.mapGetters)(["getUserDetails"])),created:function(){this.fetchPratilipiDetails(this.$route.query.id),this.getPratilipiData&&this.getPratilipiData.author&&this.fetchAuthorDetails(),this.$route.query.chapterNo&&(this.selectedChapter=Number(this.$route.query.chapterNo))},mounted:function(){t(".read-page").bind("contextmenu",function(t){t.preventDefault()}),t(window).scroll(function(){var e=t(window).scrollTop()/(t(".book-content").height()-t(window).height())*100;t(".reader-progress .progress-bar").css("width",e+"%")}),window.addEventListener("scroll",this.updateScroll)},watch:{"$route.query.id":function(t){this.fetchPratilipiDetails(t)},"$route.query.chapterNo":function(t){t?("PRATILIPI"===this.getPratilipiData.contentType&&(this.fetchPratilipiContentForHTML({pratilipiId:this.getPratilipiData.pratilipiId,chapterNo:Number(t)}),this.selectedChapter=t),"IMAGE"===this.getPratilipiData.contentType&&(this.getPratilipiData.pratilipiId!=this.$route.query.id&&this.fetchPratilipiContentForIMAGE({pratilipiId:this.getPratilipiData.pratilipiId,chapterNo:Number(t)}),this.selectedChapter=t)):this.selectedChapter=1},"getPratilipiData.pratilipiId":function(t,e){this.clearCachedContents(),"PRATILIPI"===this.getPratilipiData.contentType&&this.fetchPratilipiContentForHTML({pratilipiId:t,chapterNo:this.$route.query.chapterNo?Number(this.$route.query.chapterNo):1}),"IMAGE"===this.getPratilipiData.contentType&&this.fetchPratilipiContentForIMAGE({pratilipiId:t,chapterNo:this.$route.query.chapterNo?Number(this.$route.query.chapterNo):1}),this.fetchAuthorDetails()},"getUserDetails.userId":function(){this.fetchPratilipiDetails(this.$route.query.id)},scrollPosition:function(e,a){e>60&&"DOWN"===this.scrollDirection?(t(".header-section").addClass("nav-up"),t(".reader-progress").addClass("progress-up")):e<=60&&(t(".header-section").removeClass("nav-up"),t(".reader-progress").removeClass("progress-up")),e<a?(this.counter++,this.scrollDirection="UP"):this.scrollDirection="DOWN",this.counter>5&&(t(".header-section").removeClass("nav-up"),t(".reader-progress").removeClass("progress-up"),this.counter=0),this.isMobile()&&(t(window).height()+e>t(".content-section").height()+t(".book-bottom-ratings").height()+t(".book-content .social-share").height()+t(".book-navigation").height()+200?(t(".footer-menu").slideDown(),t('[data-toggle="tooltip"]').tooltip("show")):t(".footer-menu").slideUp()),t(window).height()+e>t(".content-section").height()?this.shouldShowOpenInAppStrip=!1:this.shouldShowOpenInAppStrip=!0},getPratilipiLoadingState:function(t){if("LOADING_SUCCESS"===t){var e=this.getPratilipiAnalyticsData(this.getPratilipiData);this.triggerAnanlyticsEvent("LANDED_READERM_READER","CONTROL",(0,i.default)({},e,{USER_ID:this.getUserDetails.userId}))}}},destroyed:function(){window.removeEventListener("scroll",this.updateScroll)}}}).call(e,a("7t+N"))}});
//# sourceMappingURL=2.c256162fcaefd7374214.js.map