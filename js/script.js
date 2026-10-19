
function changePeaceMessage() {
    const messages = [
        "اطمئني، فإن الله معكِ دائمًا ❤️",
        "بعد العسر يسر، فلا تفقدي الأمل 🌷",
        "خذي الأمور يومًا بيوم، واستعيني بالله.",
        "لا تنسي أن تمنحي نفسكِ بعض الراحة.",
        "لعل القادم أجمل مما تتوقعين 🤍"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("peaceMessage");

    if (messageElement) {
        messageElement.textContent = messages[randomIndex];
    }
}


// ========================================
// 2. صفحة الأذكار adhkar.html
// عداد الذكر
// ========================================

let dhikrCount = 0;

function countDhikr() {
    dhikrCount++;

    const counter = document.getElementById("dhikrCount");

    if (counter) {
        counter.textContent = dhikrCount;
    }
}

function resetDhikr() {
    dhikrCount = 0;

    const counter = document.getElementById("dhikrCount");

    if (counter) {
        counter.textContent = dhikrCount;
    }
}


// ========================================
// 3. صفحة الآيات ayat.html
// إظهار آية جديدة
// ========================================

function nextAyah() {
    const ayat = [
        "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
        "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ"
    ];

    const index = Math.floor(Math.random() * ayat.length);
    const ayahElement = document.getElementById("dailyAyah");

    if (ayahElement) {
        ayahElement.textContent = ayat[index];
    }
}


// ========================================
// 4. صفحة الرسائل message.html
// رسالة جديدة
// ========================================

function newMessage() {
    const messages = [
        "اطمئني، فربنا يعلم ما في قلبكِ ❤️",
        "بعد العسر يسر، فلا تفقدي الأمل 🌷",
        "خذي الأمور يومًا بيوم، ولا تضغطي على نفسكِ.",
        "ربنا قادر يبدل حزنكِ فرحًا 🤍",
        "خلي قلبكِ متعلق بالله واطمئني برحمته."
    ];

    const index = Math.floor(Math.random() * messages.length);
    const element = document.getElementById("dailyMessage");

    if (element) {
        element.textContent = messages[index];
    }
}


// ========================================
// 5. صفحة قصص الأنبياء stories.html
// عرض قصة حسب الاختيار
// ========================================

function showProphetStory() {
    const select = document.getElementById("prophetSelect");
    const story = document.getElementById("prophetStory");

    if (!select || !story) {
        return;
    }

    const stories = {
        adam: "قصة آدم عليه السلام: خلق الله آدم، وعلّمه، وأمر الملائكة بالسجود له. نتعلم من قصته أهمية التوبة والرجوع إلى الله.",

        nuh: "قصة نوح عليه السلام: دعا قومه إلى عبادة الله وصبر على أذاهم زمنًا طويلًا. نتعلم من قصته الصبر والثبات.",

        ibrahim: "قصة إبراهيم عليه السلام: دعا إلى توحيد الله، وأظهر شجاعة عظيمة في الدفاع عن الحق. نتعلم من قصته قوة الإيمان.",

        yusuf: "قصة يوسف عليه السلام: مرّ بابتلاءات كثيرة، ثم أكرمه الله. نتعلم من قصته الصبر والعفو وحسن الظن بالله.",

        musa: "قصة موسى عليه السلام: واجه فرعون وأيّده الله بالمعجزات. نتعلم من قصته الشجاعة والثقة بالله.",

        muhammad: "قصة محمد صلى الله عليه وسلم: دعا إلى الإسلام بالحكمة والصبر والرحمة. نتعلم من سيرته حسن الخلق والصدق."
    };

    story.textContent = stories[select.value] || "اختاري اسم النبي لقراءة قصته.";
}


// ========================================
// 6. صفحة اليوميات Journal.html
// حفظ اليوميات في المتصفح
// ========================================

function saveJournal() {
    const date = document.getElementById("journalDate");
    const entry = document.getElementById("journalEntry");
    const output = document.getElementById("savedJournal");

    if (!date || !entry || !output) {
        return;
    }

    if (!date.value || !entry.value.trim()) {
        alert("من فضلك أدخلي التاريخ واكتبي يومياتك أولاً 🌷");
        return;
    }

    let journals = [];

    try {
        journals = JSON.parse(
            localStorage.getItem("tomaninaJournals") || "[]"
        );
    } catch (error) {
        journals = [];
    }

    journals.push({
        date: date.value,
        text: entry.value.trim()
    });

    localStorage.setItem("tomaninaJournals", JSON.stringify(journals));

    entry.value = "";
    displayJournals();

    alert("تم حفظ يومياتك بنجاح ❤️");
}

function displayJournals() {
    const output = document.getElementById("savedJournal");

    if (!output) {
        return;
    }

    let journals = [];

    try {
        journals = JSON.parse(
            localStorage.getItem("tomaninaJournals") || "[]"
        );
    } catch (error) {
        journals = [];
    }

    output.replaceChildren();

    journals.forEach(function (journal) {
        const card = document.createElement("div");
        const heading = document.createElement("h3");
        const paragraph = document.createElement("p");

        heading.textContent = journal.date;
        paragraph.textContent = journal.text;

        card.appendChild(heading);
        card.appendChild(paragraph);

        output.appendChild(card);
    });
}


// ========================================
// 7. صفحة التواصل Contact.html
// التحقق من البيانات
// ========================================

function validateContactForm(event) {
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    if (!name || !email || !message) {
        return true;
    }

    if (
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
    ) {
        event.preventDefault();
        alert("من فضلك املئي جميع الحقول ❤️");
        return false;
    }

    alert("تم التحقق من البيانات. لكن إرسال الرسالة فعليًا يحتاج إلى خدمة إرسال.");
    event.preventDefault();

    return false;
}


// ========================================
// تشغيل الوظائف عند فتح الصفحة
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    displayJournals();
});
