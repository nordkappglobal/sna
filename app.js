document.documentElement.classList.add("js");

const content = {
  vi: {
    skip: "Bỏ qua đến nội dung chính", demoBadge: "BẢN DEMO NỘI BỘ", demoNote: "Dữ liệu, lịch, nhân sự và liên hệ đang dùng mẫu để duyệt thiết kế.", openMenu: "Mở menu", partnerLabel: "Phối hợp triển khai",
    navProgram: "Chương trình", navActivities: "Môn học", navFees: "Học phí", navInstructors: "Giảng viên", navFaq: "Câu hỏi thường gặp", navRegister: "Đăng ký tư vấn",
    heroEyebrow: "SNA AFTER SCHOOL PROGRAM · DEMO 2026", heroTitle: "Khơi mở năng khiếu.<br>Rèn luyện bản lĩnh.<br><span>Phát triển toàn diện.</span>", heroDescription: "Chương trình thể thao, võ thuật và nghệ thuật dành cho học sinh, dự kiến tổ chức tại SNA với đội ngũ chuyên môn của Huy Võ Education.",
    primaryCta: "Đăng ký nhận tư vấn", secondaryCta: "Khám phá 8 môn học", trustActivities: "bộ môn đa dạng", trustGroups: "nhóm phát triển", trustSaving: "tiết kiệm trọn khóa", imageDemo: "Hình ảnh minh họa demo — sẽ thay bằng ảnh được SNA phê duyệt", imageDemoShort: "Ảnh demo",
    proofKicker: "ĐIỀU PHỤ HUYNH QUAN TÂM", proofTitle: "Một môi trường sau giờ học đáng tin cậy", proof1: "An toàn trong từng điểm chạm", proof2: "Lộ trình phù hợp với sở thích của con", proof3: "Học phí và thông tin minh bạch", proofDemo: "Nội dung định hướng — chờ quy trình chính thức phê duyệt",
    benefitKicker: "Mỗi buổi chiều là một cơ hội mới", benefitTitle: "Nơi sở thích trở thành kỹ năng bền vững",
    benefit1Title: "Đa dạng lựa chọn", benefit1Text: "Tám bộ môn thuộc thể thao, võ thuật và nghệ thuật — biểu diễn.", benefit2Title: "Đội ngũ chuyên môn", benefit2Text: "Hồ sơ giảng viên và huấn luyện viên được chọn theo từng bộ môn.", benefit3Title: "Thuận tiện đăng ký", benefit3Text: "Phụ huynh có thể chọn nhiều môn và khung giờ phù hợp.", benefit4Title: "Học phí minh bạch", benefit4Text: "Công khai giá theo buổi và mức tiết kiệm theo thời gian đăng ký.",
    insightSeal: "trụ cột phát triển", insightKicker: "Insight phụ huynh", insightTitle: "Sau giờ học không chỉ là khoảng thời gian cần lấp đầy", insightLead: "Đó là lúc con được rời màn hình, vận động đúng cách, khám phá điều mình thực sự giỏi và mang sự tự tin trở về nhà.", pillar1Title: "Khỏe hơn", pillar1Text: "Thói quen vận động và sức bền tích cực.", pillar2Title: "Tự tin hơn", pillar2Text: "Dám thể hiện, hợp tác và bước ra khỏi vùng quen thuộc.", pillar3Title: "Trưởng thành hơn", pillar3Text: "Kỷ luật, bản lĩnh và niềm vui khi tiến bộ mỗi tuần.", insightCta: "Tìm hành trình phù hợp cho con",
    activitiesKicker: "Khám phá chương trình", activitiesTitle: "8 bộ môn — 3 hướng phát triển", activitiesIntro: "Chọn môn phù hợp với sở thích của con. Lịch học và độ tuổi bên dưới là dữ liệu mẫu phục vụ duyệt demo.", filterAll: "Tất cả", filterSports: "Thể thao", filterMartial: "Võ thuật", filterArts: "Nghệ thuật — biểu diễn",
    feesKicker: "Học phí dự kiến theo brief", feesTitle: "Đăng ký dài hạn — tiết kiệm nhiều hơn", feesIntro: "Giá theo học sinh mỗi buổi. Tổng học phí chính thức sẽ được tính theo lịch và số buổi đã xác nhận.", paySession: "Theo buổi", paySessionText: "Học phí niêm yết", paySession1: "Linh hoạt trải nghiệm", paySession2: "Không áp dụng giảm giá", payMonthly: "Theo tháng", payMonthlyText: "95% × giá/buổi × số buổi", payMonthly1: "Dễ chủ động kế hoạch", payMonthly2: "Tiết kiệm đều mỗi tháng", payCourse: "Trọn khóa", payCourseText: "90% × giá/buổi × tổng số buổi", payCourse1: "Mức tiết kiệm tốt nhất", payCourse2: "Duy trì lịch học ổn định", recommended: "Được đề xuất", feeCaption: "Bảng quy đổi mẫu theo mức học phí trong brief", feeBase: "Giá niêm yết", feeMonth: "Theo tháng −5%", feeCourse: "Trọn khóa −10%",
    instructorKicker: "Đội ngũ đồng hành", instructorTitle: "Chuyên môn đúng môn — truyền cảm hứng đúng cách", instructorIntro: "Khu vực này đang dùng hồ sơ mẫu. Danh sách, ảnh và thành tích sẽ chỉ xuất bản sau khi HVE và SNA xác nhận.", profileDemo: "Hồ sơ demo", coach1: "Huấn luyện viên mẫu 01", coach1Role: "Thể thao · Chờ phân công chính thức", coach2: "Huấn luyện viên mẫu 02", coach2Role: "Võ thuật · Chờ phân công chính thức", coach3: "Giảng viên mẫu 03", coach3Role: "Nghệ thuật · Chờ phân công chính thức",
    operationsKicker: "An toàn và vận hành", operationsTitle: "Phụ huynh luôn biết con đang ở đâu và được hỗ trợ thế nào", operationsIntro: "Quy trình bên dưới là khung minh họa, cần được đơn vị vận hành xác nhận trước khi công bố.", process1Title: "Điểm danh đầu buổi", process1Text: "Ghi nhận học sinh tham gia theo danh sách lớp.", process2Title: "Đón trả có đối soát", process2Text: "Bàn giao theo đầu mối và quy trình đã thống nhất.", process3Title: "Phản hồi rõ đầu mối", process3Text: "Một kênh chính thức để tiếp nhận và xử lý phản ánh.",
    facilityKicker: "Cơ sở vật chất tại SNA", facilityTitle: "Không gian học tập sẽ được bổ sung bằng ảnh thật đã duyệt", facility1: "Ảnh sân thể thao SNA", facility2: "Ảnh phòng nghệ thuật SNA", facility3: "Ảnh khu vực đón trả",
    faqTitle: "Phụ huynh thường hỏi", registerKicker: "Đăng ký nhận tư vấn", registerTitle: "Chọn môn phù hợp cho con chỉ trong vài phút", registerIntro: "Đây là form demo. Dữ liệu nhập vào không được lưu trong cơ sở dữ liệu và không được chuyển đến đội ngũ tuyển sinh.", demoHotline: "Hotline mẫu", notOfficial: "Không phải thông tin chính thức", registerPoint1: "Chọn nhiều môn cùng lúc", registerPoint2: "Giữ nguyên dữ liệu khi có lỗi", registerPoint3: "Xác nhận rõ sau khi gửi", formDemoAlert: "Không nhập thông tin cá nhân thật ở giai đoạn này.",
    labelParent: "Họ và tên phụ huynh *", placeholderParent: "Nguyễn Văn Demo", labelPhone: "Số điện thoại/Zalo *", labelStudent: "Họ và tên học sinh *", placeholderStudent: "Học sinh Demo", labelGrade: "Lớp đang học *", selectGrade: "Chọn lớp", labelActivities: "Môn học quan tâm * (có thể chọn nhiều)", errorCourse: "Vui lòng chọn ít nhất một môn.", labelTime: "Khung giờ phù hợp *", timeWeekday: "Sau giờ học, thứ 2–6", timeWeekend: "Cuối tuần", timeFlexible: "Linh hoạt theo tư vấn", errorTime: "Vui lòng chọn ít nhất một khung giờ.", consent: "Tôi đồng ý để Ban tổ chức liên hệ tư vấn và xử lý thông tin đăng ký theo chính sách bảo mật. *", submit: "Gửi đăng ký tư vấn", submitting: "Đang gửi bản demo...", formRequired: "Vui lòng kiểm tra các trường bắt buộc và dùng dữ liệu mẫu.", formError: "Chưa thể gửi bản demo. Vui lòng thử lại.", successTitle: "Đã ghi nhận thao tác demo", successText: "Không có dữ liệu cá nhân nào được lưu. Khi tích hợp CRM chính thức, đội ngũ tư vấn sẽ nhận lead tại bước này.", submitAnother: "Gửi thử một đăng ký khác",
    footerDemo: "Bản demo phục vụ duyệt định hướng. Vai trò pháp lý và thứ tự logo đang chờ xác nhận.", footerNav: "Điều hướng", footerContact: "Liên hệ mẫu", backTop: "Về đầu trang ↑",
    courseAge: "Độ tuổi mẫu", courseTime: "Lịch mẫu", coursePrice: "Học phí/HS/buổi", courseInterest: "Tôi quan tâm", courseDemo: "ẢNH DEMO", categorySports: "Thể thao", categoryMartial: "Võ thuật", categoryArts: "Nghệ thuật — biểu diễn"
  },
  en: {
    skip: "Skip to main content", demoBadge: "INTERNAL DEMO", demoNote: "Sample schedules, profiles and contact details are used for design review.", openMenu: "Open menu", partnerLabel: "In collaboration with",
    navProgram: "Program", navActivities: "Activities", navFees: "Fees", navInstructors: "Instructors", navFaq: "FAQ", navRegister: "Request a consultation",
    heroEyebrow: "SNA AFTER SCHOOL PROGRAM · 2026 DEMO", heroTitle: "Unlock potential.<br>Build confidence.<br><span>Grow holistically.</span>", heroDescription: "A proposed sports, martial arts and performing arts program for students, hosted at SNA and supported by the professional team from Huy Vo Education.",
    primaryCta: "Request a consultation", secondaryCta: "Explore 8 activities", trustActivities: "diverse activities", trustGroups: "development paths", trustSaving: "full-course saving", imageDemo: "Demo image — to be replaced by SNA-approved photography", imageDemoShort: "Demo image",
    proofKicker: "WHAT PARENTS CARE ABOUT", proofTitle: "An after-school environment parents can trust", proof1: "Safety across every touchpoint", proof2: "A path shaped around each child's interests", proof3: "Transparent fees and information", proofDemo: "Direction copy — official procedures pending approval",
    benefitKicker: "Every afternoon opens a new opportunity", benefitTitle: "Where interests become lasting skills",
    benefit1Title: "Diverse choices", benefit1Text: "Eight activities across sports, martial arts and performing arts.", benefit2Title: "Qualified team", benefit2Text: "Instructor and coach profiles selected for each activity.", benefit3Title: "Easy registration", benefit3Text: "Parents can select multiple activities and preferred time slots.", benefit4Title: "Transparent fees", benefit4Text: "Clear per-session fees and savings based on registration duration.",
    insightSeal: "development pillars", insightKicker: "Parent insight", insightTitle: "After school is more than time that needs to be filled", insightLead: "It is where children step away from screens, move with purpose, discover what they are good at and come home more confident.", pillar1Title: "Healthier", pillar1Text: "Positive movement habits and growing stamina.", pillar2Title: "More confident", pillar2Text: "Express, collaborate and step beyond the familiar.", pillar3Title: "More resilient", pillar3Text: "Discipline, courage and the joy of weekly progress.", insightCta: "Find the right journey for your child",
    activitiesKicker: "Explore the program", activitiesTitle: "8 activities — 3 development paths", activitiesIntro: "Choose an activity that matches your child's interests. Ages and schedules below are sample data for demo review.", filterAll: "All", filterSports: "Sports", filterMartial: "Martial arts", filterArts: "Performing arts",
    feesKicker: "Proposed fees from the brief", feesTitle: "Commit longer — save more", feesIntro: "Fees are shown per student per session. Official totals will follow the confirmed schedule and number of sessions.", paySession: "Pay per session", paySessionText: "100% of listed fee", paySession1: "Flexible trial option", paySession2: "No discount applied", payMonthly: "Monthly plan", payMonthlyText: "95% × fee/session × sessions", payMonthly1: "Plan ahead with ease", payMonthly2: "Save every month", payCourse: "Full-course plan", payCourseText: "90% × fee/session × total sessions", payCourse1: "Best available saving", payCourse2: "Maintain a consistent schedule", recommended: "Recommended", feeCaption: "Sample conversion based on fees stated in the brief", feeBase: "Listed fee", feeMonth: "Monthly −5%", feeCourse: "Full course −10%",
    instructorKicker: "The team beside every learner", instructorTitle: "The right expertise — delivered with inspiration", instructorIntro: "This section currently uses sample profiles. Names, photos and achievements will be published only after HVE and SNA approval.", profileDemo: "Demo profile", coach1: "Sample coach 01", coach1Role: "Sports · Official assignment pending", coach2: "Sample coach 02", coach2Role: "Martial arts · Official assignment pending", coach3: "Sample instructor 03", coach3Role: "Arts · Official assignment pending",
    operationsKicker: "Safety and operations", operationsTitle: "Parents know where their child is and how support is provided", operationsIntro: "The process below is an illustrative framework and requires operational approval before publication.", process1Title: "Session check-in", process1Text: "Student attendance is recorded against the class list.", process2Title: "Verified pickup", process2Text: "Handover follows the agreed contact and approved process.", process3Title: "A clear feedback channel", process3Text: "One official channel receives and resolves parent feedback.",
    facilityKicker: "Facilities at SNA", facilityTitle: "Learning spaces will be shown with approved, authentic photography", facility1: "SNA sports area photo", facility2: "SNA arts room photo", facility3: "Pickup area photo",
    faqTitle: "Frequently asked questions", registerKicker: "Request a consultation", registerTitle: "Find the right activity for your child in minutes", registerIntro: "This is a demo form. Submitted information is not stored in a database or sent to the admissions team.", demoHotline: "Sample hotline", notOfficial: "Not official contact information", registerPoint1: "Select multiple activities", registerPoint2: "Keep entered data when validation fails", registerPoint3: "Receive clear submission confirmation", formDemoAlert: "Do not enter real personal information at this stage.",
    labelParent: "Parent/guardian full name *", placeholderParent: "Demo Parent", labelPhone: "Phone/Zalo *", labelStudent: "Student full name *", placeholderStudent: "Demo Student", labelGrade: "Current grade *", selectGrade: "Select grade", labelActivities: "Activities of interest * (select multiple)", errorCourse: "Please select at least one activity.", labelTime: "Preferred time slots *", timeWeekday: "After school, Monday–Friday", timeWeekend: "Weekend", timeFlexible: "Flexible after consultation", errorTime: "Please select at least one time slot.", consent: "I agree to be contacted for consultation and to the processing of this registration under the privacy policy. *", submit: "Request a consultation", submitting: "Sending demo...", formRequired: "Please check the required fields and use sample data.", formError: "The demo could not be submitted. Please try again.", successTitle: "Demo interaction recorded", successText: "No personal information has been stored. Once the official CRM is connected, the consultation team will receive the lead at this step.", submitAnother: "Try another demo submission",
    footerDemo: "A direction-review demo. Legal roles and logo hierarchy are pending approval.", footerNav: "Navigation", footerContact: "Sample contact", backTop: "Back to top ↑",
    courseAge: "Sample age", courseTime: "Sample schedule", coursePrice: "Fee/student/session", courseInterest: "I'm interested", courseDemo: "DEMO IMAGE", categorySports: "Sports", categoryMartial: "Martial arts", categoryArts: "Performing arts"
  }
};

const courses = [
  { id: "football", group: "sports", vi: "Bóng đá", en: "Football", price: "189.000 ₫", ageVi: "6–12 tuổi", ageEn: "Ages 6–12", timeVi: "T3 & T5 · 16:30", timeEn: "Tue & Thu · 4:30 PM", image: "/assets/courses/football.jpg" },
  { id: "basketball", group: "sports", vi: "Bóng rổ", en: "Basketball", price: "189.000 ₫", ageVi: "7–14 tuổi", ageEn: "Ages 7–14", timeVi: "T2 & T6 · 16:30", timeEn: "Mon & Fri · 4:30 PM", image: "/assets/courses/basketball.jpg" },
  { id: "dance", group: "arts", vi: "Dance — Nhảy hiện đại", en: "Modern Dance", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "T4 & T7 · 16:30", timeEn: "Wed & Sat · 4:30 PM", image: "/assets/courses/dance.jpg" },
  { id: "vovinam", group: "martial", vi: "Vovinam", en: "Vovinam", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "T3 & T5 · 17:00", timeEn: "Tue & Thu · 5:00 PM", image: "/assets/courses/vovinam.jpg" },
  { id: "taekwondo", group: "martial", vi: "Taekwondo", en: "Taekwondo", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "Đang xếp lịch mẫu", timeEn: "Sample schedule pending", icon: "TKD" },
  { id: "karate", group: "martial", vi: "Karate", en: "Karate", price: "189.000 ₫", ageVi: "7–15 tuổi", ageEn: "Ages 7–15", timeVi: "Đang xếp lịch mẫu", timeEn: "Sample schedule pending", icon: "KRT" },
  { id: "drums", group: "arts", vi: "Trống hội", en: "Festival Drumming", price: "231.000 ₫", ageVi: "8–16 tuổi", ageEn: "Ages 8–16", timeVi: "T7 · 09:00", timeEn: "Sat · 9:00 AM", image: "/assets/courses/drums.jpg" },
  { id: "zither", group: "arts", vi: "Đàn tranh", en: "Vietnamese Zither", price: "389.000 ₫", ageVi: "8–16 tuổi", ageEn: "Ages 8–16", timeVi: "CN · 09:00", timeEn: "Sun · 9:00 AM", image: "/assets/courses/zither.jpg" }
];

const faqs = {
  vi: [
    ["Chương trình phù hợp với độ tuổi nào?", "Độ tuổi chính thức sẽ được công bố theo từng bộ môn. Các mốc tuổi trên demo chỉ nhằm minh họa bố cục."],
    ["Một học sinh có thể đăng ký nhiều môn không?", "Có. Phụ huynh có thể chọn nhiều môn; khả năng xếp lớp phụ thuộc lịch học chính thức."],
    ["Học phí được tính như thế nào?", "Theo học sinh mỗi buổi; dự kiến giảm 5% khi đăng ký theo tháng và 10% khi đăng ký trọn khóa."],
    ["Khi nào lịch học và ngày khai giảng được xác nhận?", "Thông tin sẽ được cập nhật sau khi bộ phận vận hành chốt lịch và điều kiện mở lớp."],
    ["Quy định học bù, bảo lưu và hoàn phí ra sao?", "Chính sách đang chờ các bên phê duyệt và chưa áp dụng trong bản demo."],
    ["Bao lâu sau khi đăng ký tôi sẽ được liên hệ?", "SLA phản hồi chính thức đang chờ xác nhận. Form demo hiện không chuyển dữ liệu đến đội ngũ tư vấn."]
  ],
  en: [
    ["What ages is the program designed for?", "Official age ranges will be published for each activity. Ages shown in this demo only illustrate the layout."],
    ["Can one student register for multiple activities?", "Yes. Parents may select multiple activities, subject to the confirmed class schedule."],
    ["How are fees calculated?", "Per student per session, with a proposed 5% monthly-plan saving and 10% full-course saving."],
    ["When will schedules and start dates be confirmed?", "They will be updated after the operations team confirms schedules and class-opening conditions."],
    ["What are the make-up, deferral and refund rules?", "These policies are pending approval and do not apply to this demo."],
    ["How soon will I be contacted after registration?", "The official response SLA is pending. This demo form does not send data to the consultation team."]
  ]
};

let currentLang = localStorage.getItem("sna_demo_lang") || "vi";
let activeFilter = "all";

function text(key) { return content[currentLang][key] || key; }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("sna_demo_lang", lang);
  document.documentElement.lang = lang;
  document.title = lang === "vi" ? "SNA After School | Demo chương trình sau giờ học" : "SNA After School | Program Demo";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = content[lang][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = content[lang][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-i18n='heroTitle']").forEach((element) => { element.innerHTML = content[lang].heroTitle; });
  const grade = document.getElementById("grade");
  [...grade.options].forEach((option, index) => { option.textContent = index === 0 ? text("selectGrade") : (lang === "vi" ? `Lớp ${index}` : `Grade ${index}`); });
  renderCourses();
  renderCourseOptions();
  renderFaqs();
}

function categoryLabel(group) {
  return group === "sports" ? text("categorySports") : group === "martial" ? text("categoryMartial") : text("categoryArts");
}

function renderCourses() {
  const grid = document.getElementById("course-grid");
  grid.innerHTML = courses.map((course) => {
    const name = currentLang === "vi" ? course.vi : course.en;
    const age = currentLang === "vi" ? course.ageVi : course.ageEn;
    const time = currentLang === "vi" ? course.timeVi : course.timeEn;
    const visual = course.image
      ? `<div class="course-visual"><img src="${course.image}" alt="${name} — ${text("courseDemo")}" loading="lazy" width="600" height="400"><span class="demo-chip">${text("courseDemo")}</span></div>`
      : `<div class="course-visual placeholder"><span class="placeholder-mark">${course.icon}</span><span class="demo-chip">${text("courseDemo")}</span></div>`;
    return `<article class="course-card" data-group="${course.group}" ${activeFilter !== "all" && activeFilter !== course.group ? "hidden" : ""}>${visual}<div class="course-body"><span class="course-category">${categoryLabel(course.group)}</span><h3>${name}</h3><div class="course-meta"><span>${text("courseAge")}: ${age}</span><span>${text("courseTime")}: ${time}</span></div><div class="course-price"><div><small>${text("coursePrice")}</small><strong>${course.price}</strong></div><button type="button" class="select-course" data-course="${course.id}">${text("courseInterest")}</button></div></div></article>`;
  }).join("");
  grid.querySelectorAll(".select-course").forEach((button) => button.addEventListener("click", () => preselectCourse(button.dataset.course)));
  queueMicrotask(initReveals);
}

function renderCourseOptions() {
  const selected = new Set([...document.querySelectorAll("#activity-options input:checked")].map((input) => input.value));
  const container = document.getElementById("activity-options");
  container.innerHTML = courses.map((course) => `<label><input type="checkbox" name="activity" value="${course.id}" ${selected.has(course.id) ? "checked" : ""}><span>${currentLang === "vi" ? course.vi : course.en}</span></label>`).join("");
  container.querySelectorAll("input").forEach((input) => input.addEventListener("change", () => document.getElementById("course-error").classList.remove("is-visible")));
}

function renderFaqs() {
  const container = document.getElementById("faq-list");
  container.innerHTML = faqs[currentLang].map(([question, answer], index) => `<article class="faq-item"><h3><button type="button" class="faq-question" aria-expanded="${index === 0}" aria-controls="faq-answer-${index}"><span>${question}</span><span aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-answer-${index}" ${index === 0 ? "" : "hidden"}>${answer}</div></article>`).join("");
  container.querySelectorAll(".faq-question").forEach((button) => button.addEventListener("click", () => {
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    container.querySelectorAll(".faq-question").forEach((item) => { item.setAttribute("aria-expanded", "false"); document.getElementById(item.getAttribute("aria-controls")).hidden = true; });
    if (!wasOpen) { button.setAttribute("aria-expanded", "true"); document.getElementById(button.getAttribute("aria-controls")).hidden = false; }
  }));
  queueMicrotask(initReveals);
}

function preselectCourse(courseId) {
  const input = document.querySelector(`#activity-options input[value="${courseId}"]`);
  if (input) input.checked = true;
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => input?.focus(), 650);
  track("select_course", { course_name: courseId, source_section: "course_card" });
}

function track(event, properties = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, locale: currentLang, ...properties });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -35px" });

function initReveals() {
  const targets = document.querySelectorAll(".section-heading, .benefit-card, .course-card, .price-card, .instructor-card, .process-list article, .faq-item, .form-card, .insight-image, .insight-copy");
  targets.forEach((element, index) => {
    if (element.dataset.revealReady) return;
    element.dataset.revealReady = "true";
    element.classList.add("reveal");
    if (element.classList.contains("insight-image")) element.classList.add("reveal-left");
    if (element.classList.contains("insight-copy")) element.classList.add("reveal-right");
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    revealObserver.observe(element);
  });
}

const heroImage = document.querySelector(".hero-media img");
let parallaxFrame = 0;
window.addEventListener("scroll", () => {
  if (parallaxFrame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  parallaxFrame = requestAnimationFrame(() => {
    const offset = Math.min(window.scrollY, 760) * .055;
    heroImage.style.transform = `translate3d(0, ${offset}px, 0) scale(1.035)`;
    parallaxFrame = 0;
  });
}, { passive: true });

document.querySelectorAll(".lang-button").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
  renderCourses();
}));

const menuToggle = document.querySelector(".menu-toggle");
const navRow = document.querySelector(".nav-row");
menuToggle.addEventListener("click", () => {
  const open = !navRow.classList.contains("is-open");
  navRow.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-inner a").forEach((link) => link.addEventListener("click", () => { navRow.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }));

const stickyCta = document.querySelector(".mobile-sticky-cta");
let heroPassed = false;
let registerVisible = false;
function updateStickyCta() { stickyCta.classList.toggle("is-visible", heroPassed && !registerVisible); }
new IntersectionObserver(([entry]) => { heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0; updateStickyCta(); }, { threshold: 0 }).observe(document.querySelector(".hero"));
new IntersectionObserver(([entry]) => { registerVisible = entry.isIntersecting; updateStickyCta(); }, { threshold: .05 }).observe(document.getElementById("register"));

const form = document.getElementById("lead-form");
const formMessage = document.getElementById("form-message");
const submitButton = document.getElementById("submit-button");

form.addEventListener("input", () => formMessage.classList.remove("is-visible"), { passive: true });
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedCourses = [...form.querySelectorAll("input[name='activity']:checked")].map((input) => input.value);
  const selectedTimes = [...form.querySelectorAll("input[name='time']:checked")].map((input) => input.value);
  const courseError = document.getElementById("course-error");
  const timeError = document.getElementById("time-error");
  courseError.classList.toggle("is-visible", selectedCourses.length === 0);
  timeError.classList.toggle("is-visible", selectedTimes.length === 0);
  if (!form.checkValidity() || selectedCourses.length === 0 || selectedTimes.length === 0) {
    formMessage.textContent = text("formRequired");
    formMessage.classList.add("is-visible");
    form.reportValidity();
    track("form_error", { error_type: "validation" });
    return;
  }
  if (form.elements.company.value) return;
  const payload = {
    parentName: form.elements.parentName.value.trim(), phone: form.elements.phone.value.trim(), studentName: form.elements.studentName.value.trim(), grade: form.elements.grade.value,
    activities: selectedCourses, timeSlots: selectedTimes, consent: form.elements.consent.checked, locale: currentLang, source: "sna-after-school-demo", submittedAt: new Date().toISOString()
  };
  submitButton.disabled = true;
  submitButton.querySelector("span").textContent = text("submitting");
  try {
    if (["localhost", "127.0.0.1"].includes(location.hostname)) {
      await new Promise((resolve) => setTimeout(resolve, 650));
    } else {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Demo endpoint failed");
    }
    track("submit_form", { selected_courses_count: selectedCourses.length, demo: true });
    form.hidden = true;
    const success = document.getElementById("success-panel");
    success.hidden = false;
    success.focus();
  } catch (error) {
    formMessage.textContent = text("formError");
    formMessage.classList.add("is-visible");
    track("form_error", { error_type: "network" });
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector("span").textContent = text("submit");
  }
});

document.getElementById("reset-form").addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  document.getElementById("success-panel").hidden = true;
  form.querySelector("input").focus();
});

applyLanguage(currentLang);
initReveals();
