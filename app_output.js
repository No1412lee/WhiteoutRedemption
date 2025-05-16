(function () {
  'use strict';

  var _0x299ba3 = {
    "./src/App.vue": function (_0x151dce, _0xc7e6ba, _0x23cfe1) {
      _0x23cfe1.r(_0xc7e6ba);
      var _0x14a36b = _0x23cfe1("./src/App.vue?vue&type=template&id=7ba5bd90");
      var _0x1ce65f = _0x23cfe1("./src/App.vue?vue&type=script&lang=js");
      var _0x893090 = _0x23cfe1("./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");
      var _0x589e04 = (0, _0x893090.default)(_0x1ce65f.default, _0x14a36b.render, _0x14a36b.staticRenderFns, false, null, null, null);
      _0x589e04.options.__file = "src/App.vue";
      _0xc7e6ba.default = _0x589e04.exports;
    },
    "./src/App.vue?vue&type=script&lang=js": function (_0x41df3c, _0x3cca6d, _0x1bbb36) {
      _0x1bbb36.r(_0x3cca6d);
      var _0x3c63e3 = _0x1bbb36("./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js");
      _0x3cca6d.default = _0x3c63e3.default;
    },
    "./src/App.vue?vue&type=template&id=7ba5bd90": function (_0x86af77, _0x93c2f5, _0x3534c3) {
      _0x3534c3.r(_0x93c2f5);
      _0x3534c3.d(_0x93c2f5, {
        render: function () {
          return _0x1d9db3.render;
        },
        staticRenderFns: function () {
          return _0x1d9db3.staticRenderFns;
        }
      });
      var _0x1d9db3 = _0x3534c3("./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90");
    },
    "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js": function (_0x2b408e, _0xfa2852, _0x13db33) {
      _0x13db33.r(_0xfa2852);
      var _0x38fcf2 = _0x13db33("./src/utils/index.js");
      _0xfa2852.default = {
        name: "App",
        created() {
          this.switchLang();
        },
        methods: {
          switchLang() {
            const _0x10641d = (navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage).toLowerCase();
            const {
              lang: _0x303463 = _0x10641d
            } = (0, _0x38fcf2.getUrlParam)();
            if (_0x303463 === "zh" || _0x303463 === "zh-cn" || _0x303463.startsWith("zh-Hans")) {
              this.$i18n.locale = "zh_cn";
            } else if (_0x303463.startsWith("en")) {
              this.$i18n.locale = "en";
            } else if (_0x303463.indexOf("zh-tw") > -1 || _0x303463.indexOf("zh-hant") > -1 || _0x303463.indexOf("zh-mo") > -1 || _0x303463.indexOf("zh-hk") > -1) {
              this.$i18n.locale = "zh_tw";
            } else if (_0x303463.startsWith("de")) {
              this.$i18n.locale = "de";
            } else if (_0x303463.startsWith("fr")) {
              this.$i18n.locale = "fr";
            } else if (_0x303463.startsWith("es")) {
              this.$i18n.locale = "es";
            } else if (_0x303463.startsWith("id")) {
              this.$i18n.locale = "id";
            } else if (_0x303463.startsWith("th")) {
              this.$i18n.locale = "th";
            } else if (_0x303463.startsWith("ru")) {
              this.$i18n.locale = "ru";
            } else if (_0x303463.startsWith("vi")) {
              this.$i18n.locale = "vi";
            } else if (_0x303463.startsWith("ko")) {
              this.$i18n.locale = "ko";
            } else if (_0x303463.startsWith("ja")) {
              this.$i18n.locale = "ja";
            } else if (_0x303463.startsWith("ar")) {
              this.$i18n.locale = "arab";
            } else if (_0x303463.startsWith("pt")) {
              this.$i18n.locale = "pt";
            } else if (_0x303463.startsWith("tr")) {
              this.$i18n.locale = "tr";
            } else if (_0x303463.startsWith("it")) {
              this.$i18n.locale = "it";
            } else if (_0x303463.startsWith("pl")) {
              this.$i18n.locale = "pl";
            } else {
              this.$i18n.locale = "en";
            }
          }
        }
      };
    },
    "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90": function (_0x55d856, _0x4f34b4, _0x3af53f) {
      _0x3af53f.r(_0x4f34b4);
      _0x3af53f.d(_0x4f34b4, {
        render: function () {
          return _0x2b5d8b;
        },
        staticRenderFns: function () {
          return _0x1b2ab2;
        }
      });
      function _0x2b5d8b() {
        var _0x270627 = this;
        var _0x403d35 = _0x270627._self._c;
        return _0x403d35("div", {
          attrs: {
            id: "app"
          }
        }, [_0x403d35("router-view")], 1);
      }
      var _0x1b2ab2 = [];
      _0x2b5d8b._withStripped = true;
    },
    "./src/lang.js": function (_0x25c7a9, _0x14df10, _0x703624) {
      _0x703624.r(_0x14df10);
      _0x14df10.default = {
        zh_cn: {
          exchange: {
            title: "兑换中心",
            description: "放置，策略，生存—在末世冻土上铸造专属于你的冰雪传奇",
            input_roleId_tips1: "角色ID",
            input_roleId_tips2: "请先输入您的角色ID。",
            input_roleId_tips3: "未找到该角色ID！",
            frequency_tip1: "登录过于频繁，请稍后再试。",
            find_roleId: "*您可在游戏中点击左上角头像进入领主界面查看角色ID",
            level: "大熔炉等级：",
            country: "王国：",
            exchange_tips1: "请输入兑换码",
            exchange_tips2: "*兑换成功后，奖励将自动发送到角色的邮箱中。",
            exchange_tips3: "确认兑换",
            exchange_tips4: "请先输入兑换码。",
            exchange_tips5: "请先登录对应的角色再进行兑换",
            frequency_tip2: "服务器繁忙，请稍后再试。",
            error_msg1: "您已领取过该礼物，无法再次领取。",
            error_msg2: "超出兑换时间，无法领取。",
            error_msg3: "超出领取次数，无法领取。",
            error_msg4: "大熔炉到达<span style=\"color: #ffcc00\">${a}</span>级才可使用",
            error_msg5: "兑换成功，请在邮件中查收奖励！",
            error_msg6: "兑换码不存在，请检查大小写",
            error_msg7: "同类型兑换码您只能兑换一次！",
            error_msg8: "兑换码未知错误",
            error_msg9: "未满足兑换条件",
            error_msg10: "服务器繁忙，奖励将稍后发送，请耐心等待",
            error_msg11: "您的账号暂不符合兑换要求，如有疑问请咨询客服。",
            error_msg12: "您的账号注册时长不满足要求，如有疑问请咨询客服。",
            login_btn: "登录",
            exit: "退出",
            confirm: "确定",
            exchange_tips6: "请输入验证码",
            exchange_tips7: "请输入验证码，再进行兑换",
            error_msg13: "验证码刷新过于频繁，请稍后再试",
            exchange_tips8: "输入右侧图片中的文本，不区分大小写",
            error_msg14: "验证码错误，请重新进行验证",
            error_msg15: "验证码已过期，请重新进行验证"
          }
        },
        en: {
          exchange: {
            title: "Gift Code Center",
            description: "Idle, strategy, survival—experience all three upon the frozen wastes!",
            input_roleId_tips1: "Player ID",
            input_roleId_tips2: "Please enter your Player ID first",
            input_roleId_tips3: "Player ID not found!",
            frequency_tip1: "Request too frequent, please try again later.",
            find_roleId: "*Check your Player ID in-game through your Avatar on the top left corner",
            level: "Furnace Level: ",
            country: "State: ",
            exchange_tips1: "Enter Gift Code",
            exchange_tips2: "*Rewards will be directly sent to Character’s mail after redemption",
            exchange_tips3: "Confirm",
            exchange_tips4: "Enter Gift Code first",
            exchange_tips5: "Please log in to relevant character before redemption",
            frequency_tip2: "Server busy. Please try again later.",
            error_msg1: "Already claimed, unable to claim again.",
            error_msg2: "Expired, unable to claim.",
            error_msg3: "Claim limit reached, unable to claim.",
            error_msg4: "Reach Lv. <span style=\"color: #ffcc00\">${a}</span> Furnace to use",
            error_msg5: "Redeemed, please claim the rewards in your mail!",
            error_msg6: "Gift Code not found, this is case-sensitive!",
            error_msg7: "The same Gift Code type can only be redeemed once!",
            error_msg8: "Redemption Code Error",
            error_msg9: "Prerequisite unmet",
            error_msg10: "Server busy, the rewards will be sent afterwards, please wait.",
            login_btn: "Login",
            exit: "Retreat",
            confirm: "Confirm",
            error_msg11: "Your account does not satisfy the redemption requirements, please consult the customer service if you have any questions.",
            error_msg12: "Your account age does not satisfy the requirement, please consult the customer service if you have any questions.",
            exchange_tips6: "Enter verification code",
            exchange_tips7: "Enter the verification code first before redeeming",
            error_msg13: "Request too frequent, please try again later.",
            exchange_tips8: "Please enter the text on the right, case insensitive.",
            error_msg14: "Incorrect code, please retry the verification.",
            error_msg15: "Code expired, please retry the verification."
          }
        },
        zh_tw: {
          exchange: {
            title: "兌換中心",
            description: "放置、策略、生存——在末世凍土上鑄造專屬於你的冰雪傳奇",
            input_roleId_tips1: "角色ID",
            input_roleId_tips2: "請先輸入您的角色ID。",
            input_roleId_tips3: "未找到該角色ID！",
            frequency_tip1: "登入過於頻繁，請稍後再試。",
            find_roleId: "*您可在遊戲中點擊左上角頭像進入領主頁面確認角色ID",
            level: "熔爐等級：",
            country: "王國：",
            exchange_tips1: "請輸入兌換碼",
            exchange_tips2: "*兌換成功後，獎勵將自動發送到角色的信箱中。",
            exchange_tips3: "確認兌換",
            exchange_tips4: "請先輸入兌換碼。",
            exchange_tips5: "請先登入對應的角色再兌換",
            frequency_tip2: "伺服器繁忙，請稍後再試。",
            error_msg1: "您已領取過該禮物，無法再次領取。",
            error_msg2: "超出兌換時間，無法領取。",
            error_msg3: "超出領取次數，無法領取。",
            error_msg4: "熔爐到達等級<span style=\"color: #ffcc00\">${a}</span>才可使用",
            error_msg5: "兌換成功，請在信件中領取獎勵！",
            error_msg6: "兌換碼不存在，請檢查大小寫",
            error_msg7: "同類型兌換碼只能兌換一次！",
            error_msg8: "兌換碼發生未知錯誤",
            error_msg9: "未滿足兌換條件",
            error_msg10: "服務器繁忙，獎勵將稍後發送，請耐心等待",
            login_btn: "登入",
            exit: "退出",
            confirm: "確定",
            error_msg11: "您的帳號暫不符合兌換要求，若有疑問請諮詢客服。",
            error_msg12: "您的帳號註冊時間不符合要求，若有疑問請諮詢客服。",
            exchange_tips6: "請輸入驗證碼",
            exchange_tips7: "請輸入驗證碼再兌換",
            error_msg13: "驗證碼刷新過於頻繁，請稍後再試",
            exchange_tips8: "輸入右側圖片中的文本，不區分大小寫",
            error_msg14: "驗證碼錯誤，請重新驗證",
            error_msg15: "驗證碼已過期，請重新驗證"
          }
        },
        de: {
          exchange: {
            title: "Geschenkcode Zentrum",
            description: "Idle, Strategie, Überleben – Erlebe alle drei in der gefrorenen Einöde!",
            input_roleId_tips1: "Spieler-ID",
            input_roleId_tips2: "Bitte gib zuerst deine Spieler-ID ein",
            input_roleId_tips3: "Spieler-ID nicht gefunden!",
            frequency_tip1: "Anfrage zu häufig, bitte versuche es später noch einmal.",
            find_roleId: "*Überprüfe deine Spieler-ID im Spiel über deinen Avatar in der oberen linken Ecke",
            level: "Ofen Level: ",
            country: "Region: ",
            exchange_tips1: "Gib Geschenkcode ein",
            exchange_tips2: "*Belohnungen werden nach der Einlösung direkt an den Charakter geschickt",
            exchange_tips3: "Bestätigen",
            exchange_tips4: "Gib Geschenkcode zuerst ein",
            exchange_tips5: "Bitte logge dich vor der Einlösung in den entsprechenden Charakter ein",
            frequency_tip2: "Server besetzt. Bitte versuche es später erneut.",
            error_msg1: "Bereits beansprucht, kann nicht erneut beansprucht werden.",
            error_msg2: "Abgelaufen, kann nicht beansprucht werden.",
            error_msg3: "Beanspruchungsgrenze erreicht, kann nicht beansprucht werden.",
            error_msg4: "Erreiche Ofen Lv. <span style=\"color: #ffcc00\">${a}</span> zur Verwendung",
            error_msg5: "Eingelöst, bitte beanspruche die Belohnungen in deinen Nachrichten!",
            error_msg6: "Geschenkcode nicht gefunden, Groß- und Kleinschreibung wird beachtet!",
            error_msg7: "Derselbe Geschenkcode-Typ kann nur einmal eingelöst werden!",
            error_msg8: "Einlösungscode-Fehler",
            error_msg9: "Voraussetzung nicht erfüllt",
            error_msg10: "Der Server ist ausgelastet, die Belohnungen werden später verschickt, bitte warte.",
            login_btn: "Anmelden",
            exit: "Rückzug",
            confirm: "Bestätigen",
            error_msg11: "Dein Konto erfüllt nicht die Einlösebedingungen. Bitte wende dich an den Kundenservice, wenn du Fragen hast.",
            error_msg12: "Das Alter deines Kontos erfüllt die Bedingungen nicht. Bitte wende dich an den Kundenservice, wenn du Fragen hast.",
            exchange_tips6: "Gb den Code ein",
            exchange_tips7: "Gib zuerst den Verifizierungscode vor dem Einlösen ein",
            error_msg13: "Anfrage zu häufig, bitte versuche es später noch einmal.",
            exchange_tips8: "Bitte gib den Text auf der rechten Seite ein, wobei Groß- und Kleinschreibung keine Rolle spielen.",
            error_msg14: "Falscher Code, bitte wiederhole die Verifizierung.",
            error_msg15: "Code ist abgelaufen, bitte wiederhole die Verifizierung."
          }
        },
        fr: {
          exchange: {
            title: "Centre Code Cadeau",
            description: "Idle, stratégie et survie - découvrez ces trois expériences dans la toundra !",
            input_roleId_tips1: "ID joueur",
            input_roleId_tips2: "Saisir d'abord l'ID joueur",
            input_roleId_tips3: "ID joueur introuvable !",
            frequency_tip1: "Demande trop fréquente, réessayer plus tard.",
            find_roleId: "*Consulte ton ID joueur dans le jeu via ton Avatar dans le coin supérieur gauche.",
            level: "Niveau de Chaudière : ",
            country: "Région : ",
            exchange_tips1: "Saisir le Code Cadeau",
            exchange_tips2: "*Les récompenses seront envoyées directement dans le courrier du personnage après l'échange",
            exchange_tips3: "Confirmer",
            exchange_tips4: "Saisir le Code Cadeau d'abord",
            exchange_tips5: "Connecte-toi au personnage adéquat avant l'échange",
            frequency_tip2: "Le serveur est occupé. Réessayer plus tard.",
            error_msg1: "Déjà réclamé, impossible réclamer à nouveau.",
            error_msg2: "Expiré, impossible de réclamer.",
            error_msg3: "Limite de demande atteinte, impossible de réclamer.",
            error_msg4: "Atteins le Niv. <span style=\"color: #ffcc00\">${a}</span> de Chaudière pour l’utiliser",
            error_msg5: "Échangé, collecte les récompenses dans tes courriers !",
            error_msg6: "Code Cadeau introuvable, attention aux majuscules et minuscules !",
            error_msg7: "Le même type de Code Cadeau est échangeable qu'une seule fois !",
            error_msg8: "Erreur d’Échange du Code",
            error_msg9: "Conditions non remplies",
            error_msg10: "Serveur occupé, les récompenses seront envoyées plus tard, merci de patienter.",
            login_btn: "Connexion",
            exit: "Retraite",
            confirm: "Confirmer",
            error_msg11: "Ton compte ne remplit pas les conditions de rédemption, merci de contacter le service client si tu as des questions.",
            error_msg12: "L'âge de ton compte ne remplit pas les conditions, merci de contacter le service client si tu as des questions.",
            exchange_tips6: "Entrer le code",
            exchange_tips7: "Entre d’abord le code vérification avant l’échange",
            error_msg13: "Demande trop fréquente, réessayer plus tard.",
            exchange_tips8: "Merci de saisir le texte à droite, non sensible à la casse.",
            error_msg14: "Code erroné, merci de recommencer la vérification.",
            error_msg15: "Code expiré, merci de recommencer la vérification."
          }
        },
        es: {
          exchange: {
            title: "Central de Códigos de Regalo",
            description: "Idle, estrategia y supervivencia: ¡vive los tres en los páramos helados!",
            input_roleId_tips1: "ID de Jugador",
            input_roleId_tips2: "Primero Introduce tu ID de Jugador",
            input_roleId_tips3: "¡ID de Jugador no encontrado!",
            frequency_tip1: "Demasiadas solicitudes, inténtalo más tarde.",
            find_roleId: "*Comprueba tu ID de Jugador a través de tu avatar en la esquina superior izquierda",
            level: "Nivel Calefactor: ",
            country: "Región: ",
            exchange_tips1: "Introduce el Código de Regalo",
            exchange_tips2: "*Al canjearse, las recompensas se enviarán directamente al correo del Personaje",
            exchange_tips3: "Confirmar",
            exchange_tips4: "Primero introduce el Código de Regalo",
            exchange_tips5: "Inicia sesión en el personaje antes del canje",
            frequency_tip2: "Servidor ocupado. Inténtalo más tarde.",
            error_msg1: "Ya recogido, no se puede volver a obtener.",
            error_msg2: "Expirado, no se puede obtener.",
            error_msg3: "Límite de obtención alcanzado, no se puede obtener.",
            error_msg4: "Mejora el Calefactor a Nv. <span style=\"color: #ffcc00\">${a}</span> para usar",
            error_msg5: "¡Canjeado, recoge las recompensas en tu correo!",
            error_msg6: "¡Código de Regalo no encontrado, atención a las mayúsculas y minúsculas!",
            error_msg7: "¡Un mismo tipo de código de regalo solo puede canjearse una vez",
            error_msg8: "Error al canjear el código",
            error_msg9: "No se ha cumplido un requisito",
            error_msg10: "Servidor ocupado, las recompensas se enviarán más tarde.",
            login_btn: "Iniciar sesión",
            exit: "Retirarse",
            confirm: "Confirmar",
            error_msg11: "Tu cuenta no cumple con los requisitos de canje, consulta con el servicio de atención al cliente si tienes alguna pregunta.",
            error_msg12: "La antigüedad de tu cuenta no cumple con el requisito, consulta con el servicio de atención al cliente si tienes alguna pregunta.",
            exchange_tips6: "Ingresa el código",
            exchange_tips7: "Ingresa el código de verificación antes de canjear",
            error_msg13: "Demasiadas solicitudes, inténtalo más tarde.",
            exchange_tips8: "Ingresa el texto de la derecha, sin distinguir mayúsculas y minúsculas.",
            error_msg14: "Código incorrecto, vuelve a intentar la verificación.",
            error_msg15: "Código expirado, vuelve a intentar la verificación."
          }
        },
        id: {
          exchange: {
            title: "Pusat Kode Hadiah",
            description: "Game Idle strategi bertahan hidup - alami semua ini pada alam beku!",
            input_roleId_tips1: "ID Pemain",
            input_roleId_tips2: "Mohon masukkan ID Pemain terlebih dahulu",
            input_roleId_tips3: "ID Pemain tidak ditemukan!",
            frequency_tip1: "Permintaan terlalu sering, silakan coba lagi nanti.",
            find_roleId: "*Cek ID Pemain di dalam Game melalui Avatar di pojok kiri atas",
            level: "Level Tungku: ",
            country: "Wilayah: ",
            exchange_tips1: "Masukkan Kode Hadiah",
            exchange_tips2: "*Hadiah akan langsung dikirim ke surat Karakter setelah penukaran",
            exchange_tips3: "Konfirmasi",
            exchange_tips4: "Masukkan Kode Hadiah terlebih dahulu",
            exchange_tips5: "Silakan Login ke karakter yang relevan sebelum penukaran",
            frequency_tip2: "Server sibuk. Silakan coba lagi nanti.",
            error_msg1: "Telah diklaim, tidak dapat mengklaim lagi.",
            error_msg2: "Kedaluwarsa, tidak dapat mengklaim.",
            error_msg3: "Batas klaim telah tercapai, tidak dapat mengklaim.",
            error_msg4: "mencapai Lv. <span style=\"color: #ffcc00\">${a}</span> Tungku untuk digunakan",
            error_msg5: "Telah ditukar, silakan klaim hadiah di suratmu!",
            error_msg6: "Kode Hadiah tidak ditemukan, perhatikan huruf kapitalnya!",
            error_msg7: "Jenis Kode Hadiah yang sama hanya dapat ditukarkan sekali!",
            error_msg8: "Kesalahan Kode Penukaran",
            error_msg9: "Prasyarat tidak terpenuhi",
            error_msg10: "Server sedang sibuk, hadiah akan dikirim setelahnya, mohon menunggu.",
            login_btn: "Masuk",
            exit: "Mundur",
            confirm: "Konfirmasi",
            error_msg11: "Akun milikmu tidak memenuhi persyaratan penebusan, silakan berkonsultasi dengan layanan pelanggan jika ada pertanyaan.",
            error_msg12: "Umur akun milikmu tidak memenuhi persyaratan, silakan berkonsultasi dengan layanan pelanggan jika ada pertanyaan.",
            exchange_tips6: "Masukkan Kode",
            exchange_tips7: "Masukkan kode verifikasi terlebih dahulu sebelum menukarkan",
            error_msg13: "Permintaan terlalu sering, silakan coba lagi nanti.",
            exchange_tips8: "Silakan masukkan teks di sebelah kanan, huruf besar/kecil tidak berpengaruh.",
            error_msg14: "Kode salah, silakan coba verifikasi ulang.",
            error_msg15: "Kode kedaluwarsa, silakan coba verifikasi ulang."
          }
        },
        th: {
          exchange: {
            title: "ศูนย์โค้ดของขวัญ",
            description: "เกมไอเดิล เกมกลยุทธ์ เกมเอาตัวรอด สัมผัสประสบการณ์เกมทั้งสามแบบนี้ในแดนน้ำแข็ง!",
            input_roleId_tips1: "ID ผู้เล่น",
            input_roleId_tips2: "โปรดกรอก ID ผู้เล่นของคุณก่อน",
            input_roleId_tips3: "ไม่พบ ID ผู้เล่น!",
            frequency_tip1: "ส่งคำขอบ่อยเกินไป โปรดลองใหม่ภายหลัง",
            find_roleId: "* ตรวจสอบ ID ผู้เล่นของคุณได้ในเกมผ่านอวตาร์ที่มุมซ้ายบน",
            level: "เลเวลเตาหลอม: ",
            country: "ภูมิภาค: ",
            exchange_tips1: "กรอกโค้ดของขวัญ",
            exchange_tips2: "*ของรางวัลจะถูกส่งตรงไปยังกล่องจดหมายของตัวละครหลังจากแลกรับ",
            exchange_tips3: "ยืนยัน",
            exchange_tips4: "กรอกโค้ดของขวัญก่อน",
            exchange_tips5: "โปรดเข้าสู่ระบบตัวละครที่เกี่ยวข้องก่อนที่จะแลกรับ",
            frequency_tip2: "เซิร์ฟเวอร์ไม่ว่าง โปรดลองใหม่ภายหลัง",
            error_msg1: "แลกรับไปแล้ว ไม่สามารถรับได้อีก",
            error_msg2: "หมดอายุแล้ว ไม่สามารถรับได้",
            error_msg3: "การแลกรับถึงขีดสูงสุดแล้ว ไม่สามารถรับได้",
            error_msg4: "มีเตาหลอมเลเวล <span style=\"color: #ffcc00\">${a}</span> เพื่อใช้",
            error_msg5: "แลกแล้ว โปรดรับรางวัลได้ในกล่องจดหมายของคุณ!",
            error_msg6: "ไม่พบโค้ดของขวัญ ต้องใส่ตัวอักษรใหญ่เล็กให้ถูกต้อง!",
            error_msg7: "รหัสของขวัญสามารถใช้แลกได้เพียงครั้งเดียวเท่านั้น!",
            error_msg8: "การรับไอเทมโค้ดเกิดผิดพลาด",
            error_msg9: "ไม่ตรงตามข้อกำหนด",
            login_btn: "เข้าสู่ระบบ",
            error_msg10: "เซิร์ฟเวอร์ไม่ว่าง โปรดรอรางวัลที่จะถูกส่งให้ในภายหลัง",
            exit: "ถอย",
            confirm: "ยืนยัน",
            error_msg11: "บัญชีของคุณไม่ตรงตามข้อกำหนดในการแลกรางวัล โปรดติดต่อฝ่ายบริการลูกค้าหากคุณมีคำถามใดๆ",
            error_msg12: "อายุบัญชีของคุณไม่ตรงตามข้อกำหนด โปรดติดต่อฝ่ายบริการลูกค้าหากคุณมีคำถามใดๆ",
            exchange_tips6: "โปรดกรอกรหัสยืนยัน",
            exchange_tips7: "กรอกรหัสยืนยันก่อนแลกรับ",
            error_msg13: "ส่งคำขอบ่อยเกินไป โปรดลองใหม่ภายหลัง",
            exchange_tips8: "โปรดกรอกข้อความทางด้านขวา ไม่ต้องคำนึงถึงตัวพิมพ์เล็ก-ใหญ่",
            error_msg14: "รหัสไม่ถูกต้อง โปรดลองยืนยันตัวอีกครั้ง",
            error_msg15: "รหัสหมดอายุแล้ว โปรดลองยืนยันตัวอีกครั้ง"
          }
        },
        ru: {
          exchange: {
            title: "Центр подарочных кодов",
            description: "Idle, стратегия, выживание — всё это ждёт вас в ледяных пустошах!",
            input_roleId_tips1: "ID игрока",
            input_roleId_tips2: "Пожалуйста, сначала введите ваш ID игрока",
            input_roleId_tips3: "ID игрока не найден!",
            frequency_tip1: "Слишком частые запросы, пожалуйста, попробуйте позже",
            find_roleId: "*Найдите свой ID игрока, нажав на аватар в верхнем левом углу",
            level: "Уровень топки: ",
            country: "Государство: ",
            exchange_tips1: "Введите подарочный код",
            exchange_tips2: "*После использования кода награды будут отправлены этому персонажу напрямую по игровой почте",
            exchange_tips3: "Подтвердить",
            exchange_tips4: "Сначала введите подарочный код",
            exchange_tips5: "Прежде чем использовать код, пожалуйста, зайдите под именем соответствующего персонажа",
            frequency_tip2: "Сервер загружен. Пожалуйста, попробуйте еще раз попозже.",
            error_msg1: "Награды уже получены, нельзя забрать их ещё раз.",
            error_msg2: "Срок действия истёк, нельзя забрать награды.",
            error_msg3: "Достигнут лимит получения, нельзя забрать награды.",
            error_msg4: "Чтобы воспользоваться, получите уровень топки <span style=\"color: #ffcc00\">${a}</span>",
            error_msg5: "Код использован! Пожалуйста, заберите награды из игровой почты!",
            error_msg6: "Подарочный код не найден. Эти коды чувствительны к регистру!",
            error_msg7: "Подарочные коды одного типа можно использовать только один раз!",
            error_msg8: "Ошибка кода активации",
            error_msg9: "Требования не выполнены",
            error_msg10: "Сервер занят, поэтому награды будут высланы чуть позже. Пожалуйста, подождите.",
            login_btn: "Вход",
            exit: "Отступить",
            confirm: "Подтвердить",
            error_msg11: "Ваш аккаунт не соответствует требованиям для обмена. Пожалуйста, свяжитесь со службой поддержки, если у вас остались какие-либо вопросы.",
            error_msg12: "Срок существования вашего аккаунта не соответствует требованию. Пожалуйста, свяжитесь со службой поддержки, если у вас остались какие-либо вопросы.",
            exchange_tips6: "Введите код",
            exchange_tips7: "Перед обменом необходимо ввести код верификации",
            error_msg13: "Слишком частые запросы. Пожалуйста, попробуйте еще раз попозже.",
            exchange_tips8: "Пожалуйста, введите текст справа (регистра не имеет значения).",
            error_msg14: "Неверный код, пожалуйста, попробуйте пройти верификацию ещё раз.",
            error_msg15: "Время действия кода истекло. Пожалуйста, попробуйте пройти верификацию ещё раз."
          }
        },
        ko: {
          exchange: {
            title: "교환 센터",
            description: "혹독한 추위에서 방치, 전략, 서바이벌 세 가지를 모두 경험하세요!",
            input_roleId_tips1: "플레이어 ID",
            input_roleId_tips2: "귀하의 플레이어 ID를 먼저 입력하세요.",
            input_roleId_tips3: "플레이어 ID를 찾지 못했습니다!",
            frequency_tip1: "로그인이 너무 빈번합니다. 잠시 후 다시 시도하세요.",
            find_roleId: "*게임 내 좌측 프로필을 탭하여 플레이어 ID를 확인하실 수 있습니다",
            level: "용광로 레벨: ",
            country: "왕국: ",
            exchange_tips1: "교환 코드를 입력해 주세요",
            exchange_tips2: "*교환 성공 후, 보상은 캐릭터의 메일로 발송됩니다.",
            exchange_tips3: "교환 확인",
            exchange_tips4: "먼저 교환 코드를 입력해 주세요",
            exchange_tips5: "교환 전, 연결된 캐릭터에 로그인하세요",
            frequency_tip2: "서버가 복잡합니다. 잠시 후 다시 시도해 주세요",
            error_msg1: "이 선물을 이미 수령하셨습니다. 다시 수령하실 수 없습니다.",
            error_msg2: "교환 시간이 초과되었습니다. 수령할 수 없습니다.",
            error_msg3: "교환 횟수가 초과되었습니다. 수령할 수 없습니다.",
            error_msg4: "용광로 Lv.<span style=\"color: #ffcc00\">${a}</span> 달성 시 사용 가능",
            error_msg5: "교환 성공. 우편에서 보상을 확인하세요!",
            error_msg6: "교환 코드가 존재하지 않습니다. 대소문자를 확인해 주세요.",
            error_msg7: "같은 타입의 교환 코드는 한 번만 교환이 가능합니다!",
            error_msg8: "알 수 없는 교환 코드 오류입니다",
            error_msg9: "교환 조건이 충족되지 않았습니다",
            error_msg10: "서버 혼잡으로 보상이 추후에 발송될 예정입니다. 조금만 더 기다려 주세요.",
            login_btn: "로그인",
            exit: "나가기",
            confirm: "확인",
            error_msg11: "교환 조건에 부합하지 않는 계정입니다. 의문사항이 있을 경우 고객센터로 문의해 주세요.",
            error_msg12: "가입 기간이 조건에 부합하지 않는 계정입니다. 의문사항이 있을 경우 고객센터로 문의해 주세요.",
            exchange_tips6: "인증 코드를 입력하세요.",
            exchange_tips7: "인증 코드를 입력한 후 교환을 진행하세요.",
            error_msg13: "인증번호 새로고침이 너무 잦습니다. 잠시 후 다시 시도해주세요.",
            exchange_tips8: "오른쪽 이미지의 텍스트를 입력하세요(대소문자 구분 없음).",
            error_msg14: "잘못된 인증번호입니다. 다시 입력해주세요.",
            error_msg15: "만료된 인증번호입니다. 다시 입력해주세요."
          }
        },
        ja: {
          exchange: {
            title: "交換センター",
            description: "氷の終末世界での生存をかけた、戦略とシミュレーションが融合した新感覚放置サバイバルゲーム",
            input_roleId_tips1: "プレイヤーID",
            input_roleId_tips2: "先にあなたのキャラクターIDをご入力ください",
            input_roleId_tips3: "このキャラクターIDが見つかりません！",
            frequency_tip1: "ログイン操作の頻度過多状態です。しばらくお待ちになってから再度お試しください",
            find_roleId: "*ゲーム左上のアイコンをタップすると自分のキャラクターIDが表示されます",
            level: "大溶鉱炉レベル：Lv.",
            country: "王国：",
            exchange_tips1: "交換コードを入力してください",
            exchange_tips2: "*交換成功後、報酬は自動的にキャラクターのメールボックスに配布",
            exchange_tips3: "交換確認",
            exchange_tips4: "先に交換コードを入力してください",
            exchange_tips5: "先に対応するキャラクターにログインしてから交換してください",
            frequency_tip2: "サーバーがビジー状態です。しばらくお待ちになってから再度お試しください",
            error_msg1: "この報酬は受取済です。再度受け取れません",
            error_msg2: "交換時間を過た為、受け取れません",
            error_msg3: "交換回数を超えた為、受け取れません",
            error_msg4: "大溶鉱炉がLv.<span style=\"color: #ffcc00\">${a}</span>になると使用できます",
            error_msg5: "交換成功です。メールボックスで報酬をご確認ください",
            error_msg6: "交換コードが存在しません。大文字・小文字を確認してください",
            error_msg7: "同タイプの交換コードは一度しか使用できません！",
            error_msg8: "交換コードが正しくありません",
            error_msg9: "変換条件を満たしていません",
            error_msg10: "サーバー混雑中の為、報酬は後ほどお送りさせていただきます。今しばらくお待ちください。",
            login_btn: "ログイン",
            exit: "終了",
            confirm: "決定",
            error_msg11: "あなたのアカウントは現時点で交換条件を満たしていません。ご質問がある場合、カスタマーサポートにお問い合わせください",
            error_msg12: "あなたのアカウントの登録期間は条件を満たしていません。ご質問がある場合、カスタマーサポートにお問い合わせください",
            exchange_tips6: "認証コードを入力してください",
            exchange_tips7: "認証コードを入力してから交換してください",
            error_msg13: "認証コードの更新の頻度過多状態です。しばらくお待ちになってから再度お試しください",
            exchange_tips8: "右側の画像のテキストを入力してください。大文字小文字は区別されません",
            error_msg14: "認証コードが間違っています。もう一度確認してください",
            error_msg15: "認証コードの有効期限が切れています。もう一度確認してください"
          }
        },
        arab: {
          exchange: {
            title: "مركز رمز الهدايا",
            description: "الخمول والاستراتيجية والنجاة - قم بتجربة الثلاثة في المناطق المتجمدة",
            input_roleId_tips1: "مُعرّف اللاعب",
            input_roleId_tips2: "يرجى إدخال مُعرّف اللاعب أولاً",
            input_roleId_tips3: "لم يتم العثور على مُعرّف اللاعب!",
            frequency_tip1: ".تم تكرار الطلب كثيراً، يرجى إعادة المحاولة لاحقاً",
            find_roleId: "تحقق من مُعرّف اللاعب داخل اللعبة من خلال الصورة الرمزية الخاصة بك في أعلى الزاوية اليسرى",
            level: "مستوى حجرة الاحتراق: ",
            country: "المقاطعة: ",
            exchange_tips1: "أدخل رمز الهدية",
            exchange_tips2: "سيتم إرسال المكافآت مباشرةً إلى بريد الشخصية بعد الاستبدال",
            exchange_tips3: "تأكيد",
            exchange_tips4: "أدخل رمز الهدية أولاً",
            exchange_tips5: "يرجى تسجيل الدخول إلى الشخصية المعنية قبل الاستبدال",
            frequency_tip2: "السيرفر مشغول. يُرجى المحاولة لاحقاً",
            error_msg1: ".تم استلام الهدية بالفعل، وبالتالي لا يمكن استلامها مرة أخرى",
            error_msg2: "انتهت صلاحية الهدية، وبالتالي لا يمكن استلامها.",
            error_msg3: "وصلت إلى الحد الأقصى للاستلام، وبالتالي لا يمكن استلامها.",
            error_msg4: "الوصول إلى المستوى <span style=\"color: #ffcc00\">${a}</span>من حجرة الاحتراق للاستخدام",
            error_msg5: "تم استبدالها، يرجى استلام المكافآت من البريد الخاص بك!",
            error_msg6: "لم يتم العثور على رمز الهدية، يرجى التحقق من حالة الأحرف!",
            error_msg7: "يمكن استبدال نفس نوع رمز الهدية مرة واحدة فقط",
            error_msg8: "خطأ بكود الاسترداد",
            error_msg9: "لم يتم استيفاء المتطلبات الأساسية",
            error_msg10: ".السيرفر مشغول، سيتم إرسال المكافآت فيما بعد، يرجى الانتظار",
            login_btn: "تسجيل الدخول",
            exit: "تراجع",
            confirm: "تأكيد",
            error_msg11: ".حسابك لا يستوفي متطلبات الاستبدال، يرجى التواصل مع خدمة العملاء إذا كانت لديك أي أسئلة",
            error_msg12: ".عمر حسابك لا يستوفي المتطلبات، يرجى التواصل مع خدمة العملاء إذا كانت لديك أي أسئلة",
            exchange_tips6: "يُرجى إدخال رمز التوثيق",
            exchange_tips7: "إدخال رمز التوثيق أولاً قبل الاستبدال",
            error_msg13: ".الطلب متكرر جداً، يُرجى المحاولة مرة أخرى لاحقاً",
            exchange_tips8: ".يُرجى إدخال النص الموجود على اليمين، غير حساس لحالة الأحرف",
            error_msg14: ".رمز غير صحيح، يُرجى إعادة محاولة التوثيق",
            error_msg15: ".انتهت صلاحية الرمز، يُرجى إعادة محاولة التوثيق"
          }
        },
        pt: {
          exchange: {
            title: "Centro do Código de Presentes",
            description: "Idle estratégico de sobrevivência - veja tudo nos desertos congelados!",
            input_roleId_tips1: "ID do Jogador",
            input_roleId_tips2: "Por favor, insira seu ID de Jogador primeiro",
            input_roleId_tips3: "ID do Jogador não encontrado!",
            frequency_tip1: "Solicitação muito frequente, tente novamente mais tarde.",
            find_roleId: "*Verificar o seu ID de jogador no jogo através do seu Avatar no canto superior esquerdo",
            level: "Nível da Fornalha: ",
            country: "Estado: ",
            exchange_tips1: "Inserir Código de Presente",
            exchange_tips2: "*As recompensas serão enviadas diretamente para o e-mail do personagem após o resgate",
            exchange_tips3: "Confirmar",
            exchange_tips4: "Insira o Código de Presente Primeiro",
            exchange_tips5: "Faça login no personagem relevante antes do resgate",
            frequency_tip2: "Servidor ocupado. Tente novamente mais tarde.",
            error_msg1: "Já coletado, não é possível coletar novamente.",
            error_msg2: "Expirado, não é possível coletar.",
            error_msg3: "Limite de coleta atingido, não é possível coletar.",
            error_msg4: "Alcance o Nv. <span style=\"color: #ffcc00\">${a}</span> da Fornalha para usar",
            error_msg5: "Resgatado, reivindique as recompensas no seu e-mail!",
            error_msg6: "Código de presente não encontrado, diferencia maiúsculas de minúsculas!",
            error_msg7: "O mesmo tipo de Código de Presente só pode ser resgatado uma vez!",
            error_msg8: "Os requisitos para Pesquisa de Tecnologia não foram atendidos",
            error_msg9: "Os pré-requisitos não foram atendidos",
            error_msg10: "Servidor ocupado, as recompensas serão enviadas posteriormente, aguarde.",
            login_btn: "Login",
            exit: "Bater em Retirada",
            confirm: "Confirmar",
            error_msg11: "Sua conta não atende aos requisitos para o resgate, consulte o atendimento ao cliente se tiver alguma dúvida.",
            error_msg12: "A idade da sua conta não atende ao requisito. Consulte o atendimento ao cliente se tiver alguma dúvida.",
            exchange_tips6: "Inserir o código",
            exchange_tips7: "Insira o código de verificação antes de resgatar",
            error_msg13: "Solicitação muito frequente, tente novamente mais tarde.",
            exchange_tips8: "Por favor, insira o texto à direita, sem distinção entre maiúsculas e minúsculas.",
            error_msg14: "Código incorreto. Tente novamente a verificação.",
            error_msg15: "O código expirou. Tente novamente a verificação."
          }
        },
        tr: {
          exchange: {
            title: "Hediye Kodu Merkezi",
            description: "Idle, strateji, hayatta kalma, üçünü de donmuş çöllerde deneyimleyin!",
            input_roleId_tips1: "Oyuncu Kimliği",
            input_roleId_tips2: "Lütfen önce Oyuncu Kimliğinizi girin",
            input_roleId_tips3: "Oyuncu kimliği bulunamadı!",
            frequency_tip1: "İstek çok sık, lütfen daha sonra tekrar deneyin.",
            find_roleId: "*Oyuncu Kimliğinizi oyun içinde sol üst köşedeki Avatarınızdan kontrol edin",
            level: "Fırın Seviyesi: ",
            country: "Eyalet: ",
            exchange_tips1: "Hediye Kodunu Gir",
            exchange_tips2: "*Ödüller, kullanımdan sonra doğrudan Karakterin postasına gönderilecektir.",
            exchange_tips3: "Onayla",
            exchange_tips4: "Önce Hediye Kodunu girin",
            exchange_tips5: "Lütfen kullanmadan önce ilgili karaktere giriş yapın",
            frequency_tip2: "Sunucu meşgul. Lütfen daha sonra tekrar deneyin.",
            error_msg1: "Zaten alındı, tekrar alınamıyor.",
            error_msg2: "Süresi doldu, tekrar alınamıyor.",
            error_msg3: "Alma sınırına ulaşıldı, alınamıyor.",
            error_msg4: "Kullanmak için Fırını Sv. <span style=\"color: #ffcc00\">${a}</span> yap",
            error_msg5: "Kullanıldı, lütfen postanızdaki ödülleri alın!",
            error_msg6: "Hediye Kodu bulunamadı, bu büyük/küçük harfe duyarlıdır!",
            error_msg7: "Aynı Hediye Kodu sadece bir kez kullanılabilir!",
            error_msg8: "Teknoloji Araştırması gereksinimleri sağlanmadı",
            error_msg9: "Ön koşul sağlanmadı",
            error_msg10: "Sunucu meşgul, ödüller daha sonra gönderilecek, lütfen bekle.",
            login_btn: "Giriş",
            exit: "Geri Çekil",
            confirm: "Onayla",
            error_msg11: "Hesabınız kurtarma şartlarını karşılamıyor; herhangi bir sorunuz varsa lütfen müşteri hizmetlerine danışın.",
            error_msg12: "Hesap yaşınız gereklilikleri karşılamıyor; herhangi bir sorunuz varsa lütfen müşteri hizmetlerine danışın.",
            exchange_tips6: "Lütfen kodu girin",
            exchange_tips7: "Kullanmadan önce doğrulama kodunu girin",
            error_msg13: "Lütfen daha sonra tekrar dene.",
            exchange_tips8: "Lütfen sağdaki metni büyük/küçük harfe duyarlı olmayacak şekilde gir.",
            error_msg14: "Hatalı kod, lütfen doğrulamayı tekrar dene.",
            error_msg15: "Kod süresi doldu, lütfen doğrulamayı tekrar dene."
          }
        },
        it: {
          exchange: {
            title: "Centro dei Codici Regalo",
            description: "Idle, strategia, sopravvivenza: sperimentali tutti sulle distese ghiacciate!",
            input_roleId_tips1: "ID Giocatore",
            input_roleId_tips2: "Prima inserisci il tuo ID Giocatore",
            input_roleId_tips3: "ID Giocatore non trovato!",
            frequency_tip1: "Richiesta troppo frequente, riprova più tardi.",
            find_roleId: "Controlla il tuo ID Giocatore nel gioco tramite il tuo Avatar nell'angolo in alto a sinistra",
            level: "Livello Fornace: ",
            country: "Stato: ",
            exchange_tips1: "Inserisci il Codice Regalo",
            exchange_tips2: "*I premi verranno inviati direttamente alla posta del personaggio dopo il riscatto",
            exchange_tips3: "Conferma",
            exchange_tips4: "Prima inserisci il Codice Regalo",
            exchange_tips5: "Accedi al personaggio pertinente prima del riscatto",
            frequency_tip2: "Server occupato. Riprova più tardi.",
            error_msg1: "Già riscattato, impossibile riscattare di nuovo.",
            error_msg2: "Scaduto, impossibile riscattare.",
            error_msg3: "Limite di riscatto raggiunto, impossibile riscattare.",
            error_msg4: "Per utilizzare aggiungi liv. <span style=\"color: #ffcc00\">${a}</span> della fornace",
            error_msg5: "Riscattato, richiedi i premi nella tua posta!",
            error_msg6: "Codice regalo non trovato, controlla maiuscole e minuscole!",
            error_msg7: "Lo stesso tipo di codice regalo può essere riscattato una sola volta!",
            error_msg8: "Requisiti di ricerca tecnologica non soddisfatti",
            error_msg9: "Requisiti non soddisfatti",
            error_msg10: "Server occupato, i premi verranno inviati successivamente, attendere.",
            login_btn: "Accedi",
            exit: "Ritirati",
            confirm: "Conferma",
            error_msg11: "Il tuo account non soddisfa i requisiti di riscatto. Per qualsiasi domanda, contatta il servizio clienti.",
            error_msg12: "L'età del tuo account non soddisfa i requisiti. In caso di domande, contatta il servizio clienti.",
            exchange_tips6: "Codice di verifica",
            exchange_tips7: "Inserisci il codice di verifica prima di riscattare",
            error_msg13: "Richiesta troppo frequente, riprova più tardi.",
            exchange_tips8: "Inserisci il testo a destra, senza distinzione tra maiuscole e minuscole.",
            error_msg14: "Codice errato, riprova la verifica.",
            error_msg15: "Codice scaduto, riprova la verifica."
          }
        },
        pl: {
          exchange: {
            title: "Centrum kodów podarunkowych",
            description: "Strategiczny idle clicker z survivalowymi elementami: zapisz się w bryle lodu!",
            input_roleId_tips1: "ID gracza",
            input_roleId_tips2: "Wprowadź najpierw swój ID gracza",
            input_roleId_tips3: "Nie znaleziono ID gracza.",
            frequency_tip1: "Zbyt częste próby, spróbuj ponownie później.",
            find_roleId: "*Sprawdź swój ID gracza w grze poprzez awatar w lewym górnym rogu.",
            level: "Poziom pieca: ",
            country: "Państwo: ",
            exchange_tips1: "Wprowadź kod podarunkowy",
            exchange_tips2: "*Nagrody zostaną wysłane bezpośrednio na pocztę postaci po ich zrealizowaniu",
            exchange_tips3: "Potwierdź",
            exchange_tips4: "Najpierw wprowadź kod podarunkowy",
            exchange_tips5: "Zaloguj się na odpowiednią postać przed odebraniem nagrody",
            frequency_tip2: "Serwer jest zajęty. Spróbuj ponownie.",
            error_msg1: "Już odebrano, nie można odebrać ponownie.",
            error_msg2: "Nagroda wygasła, nie można odebrać.",
            error_msg3: "Osiągnięto limit odbioru, nie można odebrać.",
            error_msg4: "Osiągnij <span style=\"color: #ffcc00\">${a}</span> poz. pieca, aby użyć",
            error_msg5: "Zrealizowano, odbierz nagrody w swojej poczcie!",
            error_msg6: "Nie znaleziono kodu podarunkowego. Wielkość liter ma znaczenie!",
            error_msg7: "Nie można zrealizować kodu danego typu więcej niż raz!",
            error_msg8: "Nie opracowano wymaganych technologii",
            error_msg9: "Nie spełniono wymagania",
            error_msg10: "Serwer zajęty, nagrody zostaną wysłane później, proszę czekać.",
            login_btn: "Logowanie",
            exit: "Wycofaj się",
            confirm: "Potwierdź",
            error_msg11: "Twoje konto nie spełnia wymagań dotyczących wymiany. Jeśli masz jakiekolwiek pytania, skonsultuj się z obsługą klienta.",
            error_msg12: "Wiek Twojego konta nie spełnia wymagań. W razie pytań skontaktuj się z obsługą klienta.",
            exchange_tips6: "Wprowadź kod",
            exchange_tips7: "Przed realizacją wprowadź kod weryfikacyjny",
            error_msg13: "Zbyt częste próby, spróbuj ponownie później.",
            exchange_tips8: "Proszę wpisać tekst z prawej strony, bez względu na wielkość liter.",
            error_msg14: "Nieprawidłowy kod. Proszę ponowić próbę weryfikacji.",
            error_msg15: "Kod wygasł. Proszę ponowić próbę weryfikacji."
          }
        }
      };
    },
    "./src/main.js": function (_0x4fd701, _0x575544, _0x5ae0a3) {
      _0x5ae0a3.r(_0x575544);
      var _0xc9e109 = _0x5ae0a3("./node_modules/vue/dist/vue.runtime.esm.js");
      var _0x5b310e = _0x5ae0a3("./node_modules/vue-i18n/dist/vue-i18n.esm.js");
      var _0x3d1483 = _0x5ae0a3("./node_modules/vue-meta/dist/vue-meta.esm.js");
      var _0x4baf03 = _0x5ae0a3("./node_modules/vue-router/dist/vue-router.esm.js");
      var _0x38f254 = _0x5ae0a3("./src/utils/rum.js");
      var _0x168e37 = _0x5ae0a3("./src/route.js");
      var _0x1c4400 = _0x5ae0a3("./src/App.vue");
      _0x5ae0a3("./src/assets/css/reset.css");
      _0x5ae0a3("./src/assets/css/common.css");
      _0x5ae0a3("./node_modules/animate.css/animate.css");
      var _0x2a96d9 = _0x5ae0a3("./src/lang.js");
      _0xc9e109.default.config.productionTip = false;
      _0xc9e109.default.use(_0x38f254.default, {
        app_id: "web_h5.global.sandbox",
        env: "prod"
      });
      _0x38f254.default.setShareProperties({
        projectName: "cdk"
      });
      _0xc9e109.default.use(_0x4baf03.default);
      _0xc9e109.default.use(_0x5b310e.default);
      _0xc9e109.default.use(_0x3d1483.default);
      _0xc9e109.default.prototype.lang = _0x2a96d9.default;
      const _0x566e0b = new _0x4baf03.default({
        routes: _0x168e37.default,
        mode: "history",
        base: "/"
      });
      const _0xc0c6c6 = new _0x5b310e.default({
        locale: "zh-cn",
        messages: _0x2a96d9.default
      });
      _0x566e0b.beforeEach((_0x224a23, _0x9d5caf, _0x416cf8) => {
        if (_0x224a23.meta && _0x224a23.meta.locale) {
          _0xc0c6c6.locale = _0x224a23.meta.locale;
        }
        _0x416cf8();
      });
      _0xc9e109.default.config.errorHandler = function (_0x1aa00a, _0x1504ef, _0x40e8b7) {
        _0x1504ef.$rum.errorReport(_0x1aa00a, _0x1504ef, _0x40e8b7);
      };
      new _0xc9e109.default({
        router: _0x566e0b,
        render: _0x4a005e => _0x4a005e(_0x1c4400.default),
        i18n: _0xc0c6c6,
        mounted() {
          document.dispatchEvent(new Event("render-event"));
        }
      }).$mount("#app");
    },
    "./src/route.js": function (_0x73c4e1, _0x5c7d05, _0x20a31b) {
      _0x20a31b.r(_0x5c7d05);
      _0x5c7d05.default = [{
        path: "/",
        name: "home",
        component: () => _0x20a31b.e("src_pages_home_index_vue").then(_0x20a31b.bind(_0x20a31b, "./src/pages/home/index.vue"))
      }];
    },
    "./src/utils/index.js": function (_0x3e5310, _0x5efebf, _0x3eef4f) {
      _0x3eef4f.r(_0x5efebf);
      _0x3eef4f.d(_0x5efebf, {
        debounce: function () {
          return _0x4b3f8d;
        },
        getUrlParam: function () {
          return _0x466314;
        },
        setPos: function () {
          return _0x4e51f8;
        }
      });
      const _0x4e51f8 = _0x1583af => {
        _0x1583af.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      };
      function _0x4b3f8d(_0x15958b, _0x5a0f6c) {
        let _0x5ec2d9;
        return function () {
          const _0x4b5a22 = this;
          const _0x160d0b = arguments;
          clearTimeout(_0x5ec2d9);
          _0x5ec2d9 = // TOLOOK
          setTimeout(function () {
            _0x15958b.apply(_0x4b5a22, _0x160d0b);
          }, _0x5a0f6c);
        };
      }
      function _0x466314() {
        var _0x1005ff = window.location.search.split("?");
        if (_0x1005ff.length > 1) {
          for (var _0x2f489c = {}, _0x4f8999 = _0x1005ff[1].split("&"), _0x30181e = 0; _0x30181e < _0x4f8999.length; _0x30181e++) {
            var _0x371f8e = _0x4f8999[_0x30181e].split("=");
            if (_0x371f8e !== null) {
              _0x2f489c[_0x371f8e[0]] = _0x371f8e[1];
            }
          }
          return _0x2f489c;
        }
        return {};
      }
    },
    "./src/utils/rum.js": function (_0x2ff8f3, _0x348ac0, _0x3bd41d) {
      _0x3bd41d.r(_0x348ac0);
      var _0x32a3b8 = _0x3bd41d("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
      var _0x4761ba = _0x3bd41d("./node_modules/js-md5/src/md5.js");
      var _0xb9a8f2 = _0x3bd41d.n(_0x4761ba);
      var _0x1ddd41 = _0x3bd41d("./node_modules/nanoid/index.browser.js");
      var _0x2038b7 = _0x3bd41d("./node_modules/ua-parser-js/src/ua-parser.js");
      var _0x46afc1 = _0x3bd41d("./node_modules/tracekit/tracekit.js");
      var _0x402590 = _0x3bd41d.n(_0x46afc1);
      const _0x3ac2fd = new _0x2038b7.UAParser();
      const _0x37ff3a = 30000;
      const _0x5f0592 = ({
        url: _0x45000e,
        data: _0x74cef6
      }) => {
        if (window.navigator.sendBeacon) {
          const _0x4da3b5 = navigator.sendBeacon(_0x45000e, JSON.stringify(_0x74cef6));
          return _0x4da3b5 || fetch(_0x45000e, {
            method: "POST",
            body: JSON.stringify(_0x74cef6),
            mode: "no-cors"
          });
        }
        return fetch(_0x45000e, {
          method: "POST",
          body: JSON.stringify(_0x74cef6),
          mode: "no-cors"
        });
      };
      class _0x138d2d {
        constructor(_0x279813 = {}) {
          if (_0x138d2d._instance !== null) {
            throw new Error("Rum instance already exists");
          }
          this.app_id = "";
          this.env = "";
          this.config_etag = "";
          this.user_id = this.getDeviceId();
          this.logPool = new Map();
          this.interval = _0x37ff3a;
          this.init(_0x279813);
        }
        static getInstance() {
          if (_0x138d2d._instance === null) {
            _0x138d2d._instance = new _0x138d2d();
          }
          return _0x138d2d._instance;
        }
        install(_0x3fc91f, _0x29a597) {
          _0x3fc91f.prototype.$rum = _0x138d2d.getInstance();
          _0x138d2d._instance.init(_0x29a597);
        }
        init(_0x50d78b) {
          this.app_id = _0x50d78b.app_id;
          this.env = _0x50d78b.env;
          this.interval = _0x50d78b.interval || _0x37ff3a;
        }
        getReportUrl() {
          const {
            rum_app_tag: _0x4ad17e,
            rum_url: _0x4cfb33,
            rum_appkey: _0x3ff56d
          } = {
            prod: {
              rum_app_tag: "devops.rum.us",
              rum_url: "https://logagent-wf.centurygame.com",
              rum_appkey: "d3b7c2e58b97b29faa637dc31af8feb6"
            },
            sandbox: {
              rum_app_tag: "devops.rum.sandbox",
              rum_url: "https://logagent-sandbox.centurygame.com",
              rum_appkey: "91758f892f6c045cdeb2575ed86c1be9"
            },
            develop: {
              rum_app_tag: "devops.rum.sandbox",
              rum_url: "https://logagent-sandbox.centurygame.com",
              rum_appkey: "91758f892f6c045cdeb2575ed86c1be9"
            }
          }[this.env];
          const _0x452a58 = Date.now().toString().substr(0, 10);
          const _0x2fa1cb = _0xb9a8f2()(_0x4ad17e + ":" + _0x452a58 + ":" + _0x3ff56d);
          return _0x4cfb33 + "/log?tag=" + _0x4ad17e + "&timestamp=" + _0x452a58 + "&num=1&signature=" + _0x2fa1cb;
        }
        getCommonProperties() {
          return {
            sdk_version: "web",
            ts: Date.now() * 1,
            os: _0x3ac2fd.getOS().name,
            os_version: _0x3ac2fd.getOS().version,
            device: JSON.stringify({
              ..._0x3ac2fd.getDevice(),
              UA: navigator.userAgent
            }, null, 2),
            carrier: JSON.stringify({
              width: window.innerWidth,
              height: window.innerHeight,
              lang: navigator.language || navigator.userLanguage
            }, null, 2),
            target_user_id: this.getDeviceId(),
            http_url: window.location.href,
            http_status: this.getNetworkStatus()
          };
        }
        getDeviceId() {
          let _0x25e771;
          _0x25e771 = window.localStorage.getItem("rum_device_id");
          if (!_0x25e771) {
            _0x25e771 = (0, _0x1ddd41.nanoid)() + Date.now();
            window.localStorage.setItem("rum_device_id", _0x25e771);
          }
          return _0x25e771;
        }
        getNetworkStatus() {
          const _0x2f0bca = window.navigator.connetion;
          if (_0x2f0bca) {
            const _0x4a3a5c = {
              type: _0x2f0bca.type,
              downlink: _0x2f0bca.downlink,
              rtt: _0x2f0bca.rtt
            };
            return JSON.stringify(_0x4a3a5c);
          }
          return "浏览器版本过低，无法获取网络情况";
        }
        setShareProperties(_0x4c7421) {
          this.config_etag = typeof _0x4c7421 === "object" ? JSON.stringify(_0x4c7421) : "";
        }
        setUserId(_0x163448) {
          if (_0x163448) {
            this.user_id = _0x163448;
          }
        }
        addLog(_0x2148cb) {
          const _0x12859b = _0xb9a8f2()(JSON.stringify(_0x2148cb));
          const _0x48a0e4 = this.logPool.get(_0x12859b);
          const _0x37eed6 = Date.now();
          if (!_0x48a0e4 || _0x48a0e4 && _0x37eed6 > _0x48a0e4.expireTime) {
            this.logPool.set(_0x12859b, {
              expireTime: _0x37eed6 + this.interval
            });
            return this.baseReport(_0x2148cb);
          }
        }
        async baseReport({
          event: _0x33d266,
          properties: _0x256c70 = {}
        }) {
          try {
            await _0x5f0592({
              url: this.getReportUrl(),
              data: {
                app_id: this.app_id,
                data_version: "1.0",
                session_id: "unkown",
                event: _0x33d266,
                properties: {
                  ...this.getCommonProperties(),
                  ..._0x256c70
                },
                user_id: this.user_id,
                rum_id: this.app_id,
                ts: Date.now() * 1
              }
            });
          } catch (_0x5d1d10) {}
        }
        report(_0x595eef, _0x5c8a32, _0xb5dcd) {
          const _0x57723c = JSON.stringify(_0x5c8a32, null, 2);
          this.baseReport({
            event: _0x595eef,
            properties: {
              log: _0x57723c.length < 1048576 ? _0x57723c : _0x57723c.substring(0, 1048576),
              log_level: _0xb5dcd + "",
              config_etag: this.config_etag
            }
          });
        }
        errorReport(_0x198977) {
          if (_0x198977 instanceof Error) {
            let _0x4cb732 = _0x402590().computeStackTrace(_0x198977);
            _0x4cb732 = {
              ..._0x4cb732,
              stack: _0x4cb732.stack.slice(0, 10)
            };
            this.addLog({
              event: "error",
              properties: {
                req_id: _0xb9a8f2()(JSON.stringify(_0x4cb732.stack[0].url)),
                call_stack_symbols: JSON.stringify(_0x4cb732, null, 2)
              }
            });
          }
        }
      }
      (0, _0x32a3b8.default)(_0x138d2d, "_instance", null);
      _0x348ac0.default = _0x138d2d.getInstance();
    },
    "./src/assets/css/common.css": function (_0x2f5e89, _0x5c5709, _0x23ba88) {
      _0x23ba88.r(_0x5c5709);
    },
    "./src/assets/css/reset.css": function (_0x5a1251, _0x6fa2a2, _0x566657) {
      _0x566657.r(_0x6fa2a2);
    }
  };
  var _0x18690f = {};
  function _0x615355(_0x379c61) {
    var _0x4f8157 = _0x18690f[_0x379c61];
    if (_0x4f8157 !== undefined) {
      return _0x4f8157.exports;
    }
    var _0x40e966 = _0x18690f[_0x379c61] = {
      exports: {}
    };
    _0x299ba3[_0x379c61].call(_0x40e966.exports, _0x40e966, _0x40e966.exports, _0x615355);
    return _0x40e966.exports;
  }
  _0x615355.m = _0x299ba3;
  (function () {
    _0x615355.amdO = {};
  })();
  (function () {
    var _0x1b0b8d = [];
    _0x615355.O = function (_0xba82c1, _0x1cbf5f, _0x3b13e9, _0x2e0853) {
      if (!_0x1cbf5f) {
        var _0x48c33d = Infinity;
        for (_0x2af90f = 0; _0x2af90f < _0x1b0b8d.length; _0x2af90f++) {
          _0x1cbf5f = _0x1b0b8d[_0x2af90f][0];
          _0x3b13e9 = _0x1b0b8d[_0x2af90f][1];
          _0x2e0853 = _0x1b0b8d[_0x2af90f][2];
          for (var _0x532503 = true, _0x27d7be = 0; _0x27d7be < _0x1cbf5f.length; _0x27d7be++) {
            if ((_0x2e0853 & false || _0x48c33d >= _0x2e0853) && Object.keys(_0x615355.O).every(function (_0x530e98) {
              return _0x615355.O[_0x530e98](_0x1cbf5f[_0x27d7be]);
            })) {
              _0x1cbf5f.splice(_0x27d7be--, 1);
            } else {
              _0x532503 = false;
              if (_0x2e0853 < _0x48c33d) {
                _0x48c33d = _0x2e0853;
              }
            }
          }
          if (_0x532503) {
            _0x1b0b8d.splice(_0x2af90f--, 1);
            var _0x356882 = _0x3b13e9();
            if (_0x356882 !== undefined) {
              _0xba82c1 = _0x356882;
            }
          }
        }
        return _0xba82c1;
      }
      _0x2e0853 = _0x2e0853 || 0;
      for (var _0x2af90f = _0x1b0b8d.length; _0x2af90f > 0 && _0x1b0b8d[_0x2af90f - 1][2] > _0x2e0853; _0x2af90f--) {
        _0x1b0b8d[_0x2af90f] = _0x1b0b8d[_0x2af90f - 1];
      }
      _0x1b0b8d[_0x2af90f] = [_0x1cbf5f, _0x3b13e9, _0x2e0853];
    };
  })();
  (function () {
    _0x615355.n = function (_0x2d140f) {
      var _0xb07144 = _0x2d140f && _0x2d140f.__esModule ? function () {
        return _0x2d140f.default;
      } : function () {
        return _0x2d140f;
      };
      _0x615355.d(_0xb07144, {
        a: _0xb07144
      });
      return _0xb07144;
    };
  })();
  (function () {
    _0x615355.d = function (_0x49b606, _0x9c0a2a) {
      for (var _0x5f20c3 in _0x9c0a2a) {
        if (_0x615355.o(_0x9c0a2a, _0x5f20c3) && !_0x615355.o(_0x49b606, _0x5f20c3)) {
          Object.defineProperty(_0x49b606, _0x5f20c3, {
            enumerable: true,
            get: _0x9c0a2a[_0x5f20c3]
          });
        }
      }
    };
  })();
  (function () {
    _0x615355.f = {};
    _0x615355.e = function (_0x3bb8a1) {
      return Promise.all(Object.keys(_0x615355.f).reduce(function (_0x28d277, _0x3e6de7) {
        _0x615355.f[_0x3e6de7](_0x3bb8a1, _0x28d277);
        return _0x28d277;
      }, []));
    };
  })();
  (function () {
    _0x615355.u = function (_0x2c2520) {
      return "js/" + _0x2c2520 + "." + _0x615355.h() + ".js";
    };
  })();
  (function () {
    _0x615355.miniCssF = function (_0x28ec64) {
      return "css/" + _0x28ec64 + ".41d81f61.css";
    };
  })();
  (function () {
    _0x615355.h = function () {
      return "aabb8de83b71f833";
    };
  })();
  (function () {
    _0x615355.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x355cb8) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (function () {
    _0x615355.o = function (_0x2b53e7, _0x423439) {
      return Object.prototype.hasOwnProperty.call(_0x2b53e7, _0x423439);
    };
  })();
  (function () {
    var _0x259339 = {};
    var _0x75befa = "web-template:";
    _0x615355.l = function (_0x556047, _0x1c3458, _0x17c102, _0x19ff09) {
      if (_0x259339[_0x556047]) {
        _0x259339[_0x556047].push(_0x1c3458);
      } else {
        var _0x69c954;
        var _0x2dafc2;
        if (_0x17c102 !== undefined) {
          for (var _0x795e6 = document.getElementsByTagName("script"), _0x2423fc = 0; _0x2423fc < _0x795e6.length; _0x2423fc++) {
            var _0x438b7f = _0x795e6[_0x2423fc];
            if (_0x438b7f.getAttribute("src") == _0x556047 || _0x438b7f.getAttribute("data-webpack") == _0x75befa + _0x17c102) {
              _0x69c954 = _0x438b7f;
              break;
            }
          }
        }
        if (!_0x69c954) {
          _0x2dafc2 = true;
          _0x69c954 = document.createElement("script");
          _0x69c954.charset = "utf-8";
          _0x69c954.timeout = 120;
          if (_0x615355.nc) {
            _0x69c954.setAttribute("nonce", _0x615355.nc);
          }
          _0x69c954.setAttribute("data-webpack", _0x75befa + _0x17c102);
          _0x69c954.src = _0x556047;
        }
        _0x259339[_0x556047] = [_0x1c3458];
        function _0x263946(_0x2a31d2, _0x12d578) {
          _0x69c954.onerror = _0x69c954.onload = null;
          clearTimeout(_0xa7a28b);
          var _0x4b3fd3 = _0x259339[_0x556047];
          delete _0x259339[_0x556047];
          if (_0x69c954.parentNode) {
            _0x69c954.parentNode.removeChild(_0x69c954);
          }
          if (_0x4b3fd3) {
            _0x4b3fd3.forEach(function (_0x4c602d) {
              return _0x4c602d(_0x12d578);
            });
          }
          if (_0x2a31d2) {
            return _0x2a31d2(_0x12d578);
          }
        }
        var _0xa7a28b = // TOLOOK
        setTimeout(_0x263946.bind(null, undefined, {
          type: "timeout",
          target: _0x69c954
        }), 120000);
        _0x69c954.onerror = _0x263946.bind(null, _0x69c954.onerror);
        _0x69c954.onload = _0x263946.bind(null, _0x69c954.onload);
        if (_0x2dafc2) {
          document.head.appendChild(_0x69c954);
        }
      }
    };
  })();
  (function () {
    _0x615355.r = function (_0x237e78) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(_0x237e78, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(_0x237e78, "__esModule", {
        value: true
      });
    };
  })();
  (function () {
    _0x615355.p = "/";
  })();
  (function () {
    if (typeof document !== "undefined") {
      function _0x40ac28(_0x129f98, _0x4b13fc, _0x275c21, _0x437adf, _0x149af0) {
        var _0x400ad7 = document.createElement("link");
        _0x400ad7.rel = "stylesheet";
        _0x400ad7.type = "text/css";
        function _0x497c17(_0x3c7e35) {
          _0x400ad7.onerror = _0x400ad7.onload = null;
          if (_0x3c7e35.type === "load") {
            _0x437adf();
          } else {
            var _0x5b8b39 = _0x3c7e35 && _0x3c7e35.type;
            var _0x2c78c1 = _0x3c7e35 && _0x3c7e35.target && _0x3c7e35.target.href || _0x4b13fc;
            var _0x1ec21d = new Error("Loading CSS chunk " + _0x129f98 + " failed.\n(" + _0x5b8b39 + ": " + _0x2c78c1 + ")");
            _0x1ec21d.name = "ChunkLoadError";
            _0x1ec21d.code = "CSS_CHUNK_LOAD_FAILED";
            _0x1ec21d.type = _0x5b8b39;
            _0x1ec21d.request = _0x2c78c1;
            if (_0x400ad7.parentNode) {
              _0x400ad7.parentNode.removeChild(_0x400ad7);
            }
            _0x149af0(_0x1ec21d);
          }
        }
        _0x400ad7.onerror = _0x400ad7.onload = _0x497c17;
        _0x400ad7.href = _0x4b13fc;
        if (_0x275c21) {
          _0x275c21.parentNode.insertBefore(_0x400ad7, _0x275c21.nextSibling);
        } else {
          document.head.appendChild(_0x400ad7);
        }
        return _0x400ad7;
      }
      function _0x5632bc(_0x1401fc, _0x71ce4b) {
        for (var _0x17b737 = document.getElementsByTagName("link"), _0x7aa2c6 = 0; _0x7aa2c6 < _0x17b737.length; _0x7aa2c6++) {
          var _0xe97b68 = _0x17b737[_0x7aa2c6];
          var _0x5b790a = _0xe97b68.getAttribute("data-href") || _0xe97b68.getAttribute("href");
          if (_0xe97b68.rel === "stylesheet" && (_0x5b790a === _0x1401fc || _0x5b790a === _0x71ce4b)) {
            return _0xe97b68;
          }
        }
        var _0x3800cf = document.getElementsByTagName("style");
        for (_0x7aa2c6 = 0; _0x7aa2c6 < _0x3800cf.length; _0x7aa2c6++) {
          _0xe97b68 = _0x3800cf[_0x7aa2c6];
          _0x5b790a = _0xe97b68.getAttribute("data-href");
          if (_0x5b790a === _0x1401fc || _0x5b790a === _0x71ce4b) {
            return _0xe97b68;
          }
        }
      }
      function _0x3e53af(_0x4af878) {
        return new Promise(function (_0x3528ec, _0x5a2ab4) {
          var _0x36bc26 = _0x615355.miniCssF(_0x4af878);
          var _0x450193 = _0x615355.p + _0x36bc26;
          if (_0x5632bc(_0x36bc26, _0x450193)) {
            return _0x3528ec();
          }
          _0x40ac28(_0x4af878, _0x450193, null, _0x3528ec, _0x5a2ab4);
        });
      }
      var _0x199654 = {
        app: 0
      };
      _0x615355.f.miniCss = function (_0x16a930, _0x193df4) {
        var _0x3c5525 = {
          src_pages_home_index_vue: 1
        };
        if (_0x199654[_0x16a930]) {
          _0x193df4.push(_0x199654[_0x16a930]);
        } else if (_0x199654[_0x16a930] !== 0 && _0x3c5525[_0x16a930]) {
          _0x193df4.push(_0x199654[_0x16a930] = _0x3e53af(_0x16a930).then(function () {
            _0x199654[_0x16a930] = 0;
          }, function (_0x17f3c7) {
            delete _0x199654[_0x16a930];
            throw _0x17f3c7;
          }));
        }
      };
    }
  })();
  (function () {
    var _0x473496 = {
      app: 0
    };
    _0x615355.f.j = function (_0x4b38c, _0x3768c8) {
      var _0x58fdb9 = _0x615355.o(_0x473496, _0x4b38c) ? _0x473496[_0x4b38c] : undefined;
      if (_0x58fdb9 !== 0) {
        if (_0x58fdb9) {
          _0x3768c8.push(_0x58fdb9[2]);
        } else {
          var _0x32c85c = new Promise(function (_0xc29551, _0x26f2f6) {
            _0x58fdb9 = _0x473496[_0x4b38c] = [_0xc29551, _0x26f2f6];
          });
          _0x3768c8.push(_0x58fdb9[2] = _0x32c85c);
          var _0x2ace2e = _0x615355.p + _0x615355.u(_0x4b38c);
          var _0x3a5398 = new Error();
          function _0x47e17b(_0x5b111f) {
            if (_0x615355.o(_0x473496, _0x4b38c) && (_0x58fdb9 = _0x473496[_0x4b38c], _0x58fdb9 !== 0 && (_0x473496[_0x4b38c] = undefined), _0x58fdb9)) {
              var _0x20787e = _0x5b111f && (_0x5b111f.type === "load" ? "missing" : _0x5b111f.type);
              var _0x1b3674 = _0x5b111f && _0x5b111f.target && _0x5b111f.target.src;
              _0x3a5398.message = "Loading chunk " + _0x4b38c + " failed.\n(" + _0x20787e + ": " + _0x1b3674 + ")";
              _0x3a5398.name = "ChunkLoadError";
              _0x3a5398.type = _0x20787e;
              _0x3a5398.request = _0x1b3674;
              _0x58fdb9[1](_0x3a5398);
            }
          }
          _0x615355.l(_0x2ace2e, _0x47e17b, "chunk-" + _0x4b38c, _0x4b38c);
        }
      }
    };
    _0x615355.O.j = function (_0x53f325) {
      return _0x473496[_0x53f325] === 0;
    };
    function _0xa462a0(_0x3bbd2b, _0x4d1d5d) {
      var _0x2c03d2;
      var _0x4d2708;
      var _0x19873b = _0x4d1d5d[0];
      var _0x21cbd9 = _0x4d1d5d[1];
      var _0x33ec1e = _0x4d1d5d[2];
      var _0x3e03e2 = 0;
      if (_0x19873b.some(function (_0x4529f7) {
        return _0x473496[_0x4529f7] !== 0;
      })) {
        for (_0x2c03d2 in _0x21cbd9) {
          if (_0x615355.o(_0x21cbd9, _0x2c03d2)) {
            _0x615355.m[_0x2c03d2] = _0x21cbd9[_0x2c03d2];
          }
        }
        if (_0x33ec1e) {
          var _0x5cc7d1 = _0x33ec1e(_0x615355);
        }
      }
      for (_0x3bbd2b && _0x3bbd2b(_0x4d1d5d); _0x3e03e2 < _0x19873b.length; _0x3e03e2++) {
        _0x4d2708 = _0x19873b[_0x3e03e2];
        if (_0x615355.o(_0x473496, _0x4d2708) && _0x473496[_0x4d2708]) {
          _0x473496[_0x4d2708][0]();
        }
        _0x473496[_0x4d2708] = 0;
      }
      return _0x615355.O(_0x5cc7d1);
    }
    var _0x25ffe3 = self.webpackChunkweb_template = self.webpackChunkweb_template || [];
    _0x25ffe3.forEach(_0xa462a0.bind(null, 0));
    _0x25ffe3.push = _0xa462a0.bind(null, _0x25ffe3.push.bind(_0x25ffe3));
  })();
  var _0x3c762a = _0x615355.O(undefined, ["chunk-vendors"], function () {
    return _0x615355("./src/main.js");
  });
  _0x3c762a = _0x615355.O(_0x3c762a);
})();