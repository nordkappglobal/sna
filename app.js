document.documentElement.classList.add("js");

const content = {
  vi: {
    skip: "Bỏ qua đến nội dung chính", demoBadge: "THÔNG TIN ĐANG CẬP NHẬT", demoNote: "Lịch học, học phí và một số thông tin chương trình sẽ được cập nhật sau khi có xác nhận chính thức.", openMenu: "Mở menu", partnerLabel: "Phối hợp triển khai",
    navProgram: "Chương trình", navActivities: "Môn học", navFees: "Học phí", navInstructors: "Giảng viên", navFaq: "Câu hỏi thường gặp", navRegister: "Đăng ký tư vấn",
    heroEyebrow: "SNA AFTER SCHOOL PROGRAM · 2026", heroTitle: "Khơi mở năng khiếu.<br>Rèn luyện bản lĩnh.<br><span>Phát triển toàn diện.</span>", heroDescription: "Chương trình thể thao, võ thuật và nghệ thuật dành cho học sinh tổ chức tại SNA với đội ngũ chuyên nghiệp.",
    primaryCta: "Đăng ký nhận tư vấn", secondaryCta: "Khám phá 8 môn học", trustActivities: "bộ môn đa dạng", trustGroups: "lĩnh vực phát triển", trustSaving: "ưu đãi trọn khóa",
    proofKicker: "ĐIỀU PHỤ HUYNH QUAN TÂM", proofTitle: "Môi trường sau giờ học an toàn, chuyên nghiệp", proof1: "An toàn trong suốt buổi học", proof2: "Môn học phù hợp với sở thích và độ tuổi", proof3: "Học phí và thông tin minh bạch", proofDemo: "Quy trình chi tiết sẽ được cập nhật trước ngày khai giảng.",
    benefitKicker: "Mỗi buổi học, thêm một trải nghiệm mới", benefitTitle: "Tạo nền tảng để con phát triển lâu dài",
    benefit1Title: "Đa dạng lựa chọn", benefit1Text: "8 bộ môn thuộc ba lĩnh vực: thể thao, võ thuật và nghệ thuật biểu diễn.", benefit2Title: "Đội ngũ chuyên môn", benefit2Text: "Giảng viên và huấn luyện viên có chuyên môn phù hợp với từng bộ môn.", benefit3Title: "Thuận tiện đăng ký", benefit3Text: "Dễ dàng lựa chọn môn học và khung giờ phù hợp với lịch của gia đình.", benefit4Title: "Học phí minh bạch", benefit4Text: "Học phí được công bố rõ ràng theo từng buổi và từng hình thức đăng ký.",
    insightSeal: "trụ cột phát triển", insightKicker: "Điều phụ huynh mong muốn", insightTitle: "Sau giờ học là thời gian để con khám phá và trưởng thành", insightLead: "Thông qua vận động và nghệ thuật, con có thêm cơ hội khám phá sở thích, rèn luyện kỹ năng và tự tin thể hiện bản thân.", pillar1Title: "Khỏe hơn", pillar1Text: "Hình thành thói quen vận động và nâng cao thể lực.", pillar2Title: "Tự tin hơn", pillar2Text: "Tự tin thể hiện bản thân và phối hợp cùng bạn bè.", pillar3Title: "Trưởng thành hơn", pillar3Text: "Rèn tính kỷ luật, sự kiên trì và tinh thần chủ động.", insightCta: "Khám phá môn học phù hợp với con",
    activitiesKicker: "Khám phá chương trình", activitiesTitle: "8 bộ môn thuộc 3 lĩnh vực", activitiesIntro: "Phụ huynh có thể tham khảo từng bộ môn để lựa chọn hoạt động phù hợp với sở thích của con. Lịch học và độ tuổi sẽ được cập nhật sau khi có xác nhận chính thức.", filterAll: "Tất cả", filterSports: "Thể thao", filterMartial: "Võ thuật", filterArts: "Nghệ thuật biểu diễn",
    feesKicker: "Thông tin học phí", feesTitle: "Lựa chọn hình thức đăng ký phù hợp", feesIntro: "Học phí được tính theo học sinh và số buổi học. Mức học phí chính thức sẽ được xác nhận theo lịch của từng bộ môn.", paySession: "Theo buổi", paySessionText: "Học phí niêm yết", paySession1: "Linh hoạt lựa chọn số buổi học", paySession2: "Không áp dụng giảm giá", payMonthly: "Theo tháng", payMonthlyText: "95% × giá/buổi × số buổi", payMonthly1: "Chủ động sắp xếp kế hoạch học tập", payMonthly2: "Tiết kiệm 5% học phí", payCourse: "Trọn khóa", payCourseText: "90% × giá/buổi × tổng số buổi", payCourse1: "Tiết kiệm 10% học phí", payCourse2: "Duy trì lịch học ổn định", recommended: "Lựa chọn ưu đãi", feeCaption: "Mức học phí tham khảo theo từng hình thức đăng ký", feeBase: "Giá niêm yết", feeMonth: "Theo tháng −5%", feeCourse: "Trọn khóa −10%",
    instructorKicker: "Đội ngũ giảng dạy", instructorTitle: "Chuyên nghiệp – Đầy cảm hứng", instructorIntro: "Các giảng viên và huấn luyện viên tiêu biểu có chuyên môn vững vàng, nhiều năm kinh nghiệm và phương pháp hướng dẫn phù hợp với học sinh.", instructorFootball: "Bóng đá", instructorDance: "Nhảy hiện đại", instructorKarate: "Karate", instructorBasketball: "Bóng rổ", instructorTaekwondo: "Taekwondo", instructorVovinam: "Vovinam", coach1Role: "Huấn luyện viên · 6 năm kinh nghiệm", coach1Credential: "Chứng chỉ Huấn luyện viên AFC", coach2Role: "Giảng viên · 9 năm kinh nghiệm", coach2Credential: "Cử nhân Huấn luyện Múa", coach3Role: "Huấn luyện viên · 10 năm kinh nghiệm", coach3Credential: "Đai đen Tứ đẳng Karate", coach4Role: "Huấn luyện viên · 10 năm kinh nghiệm", coach4Credential: "Cử nhân Huấn luyện Thể thao", coach5Role: "Giảng viên · 15 năm kinh nghiệm", coach5Credential: "Thạc sĩ Giáo dục học", coach6Role: "Huấn luyện viên · 20 năm kinh nghiệm", coach6Credential: "Võ sư Cao đẳng Hồng đai Nhị",
    operationsKicker: "An toàn và vận hành", operationsTitle: "An tâm trong suốt thời gian con tham gia chương trình", operationsIntro: "Học sinh được điểm danh, hướng dẫn và bàn giao theo quy trình thống nhất giữa các đơn vị tổ chức.", process1Title: "Điểm danh đầu buổi", process1Text: "Điểm danh học sinh theo danh sách của từng lớp.", process2Title: "Đón và bàn giao học sinh", process2Text: "Học sinh được bàn giao đúng người phụ trách theo quy trình đã thống nhất.", process3Title: "Hỗ trợ phụ huynh", process3Text: "Các thắc mắc của phụ huynh được tiếp nhận và phản hồi qua kênh liên hệ của chương trình.",
    facilityKicker: "Cơ sở vật chất tại SNA", facilityTitle: "Không gian học tập hiện đại, an toàn và truyền cảm hứng", facilityNote: "Hình ảnh thực tế tại SNA Marianapolis International School – Biên Hòa Campus.", facility1: "Sân thể thao ngoài trời", facility2: "Hồ bơi có mái che", facility3: "Khuôn viên SNA",
    faqTitle: "Phụ huynh thường hỏi", registerKicker: "Đăng ký nhận tư vấn", registerTitle: "Đăng ký để được tư vấn môn học phù hợp", registerIntro: "Phụ huynh có thể liên hệ trực tiếp qua hotline để được tư vấn về môn học, lịch học và học phí.", demoHotline: "Hotline tư vấn", contactMsDien: "Cô Diện", contactMrBach: "Thầy Bách", registerPoint1: "Tư vấn môn học theo sở thích và độ tuổi", registerPoint2: "Hỗ trợ lựa chọn lịch học phù hợp", registerPoint3: "Giải đáp thông tin về học phí và đăng ký", formNotice: "THÔNG TIN", formDemoAlert: "Vui lòng điền đầy đủ thông tin để bộ phận tư vấn liên hệ hỗ trợ.",
    labelParent: "Họ và tên phụ huynh *", placeholderParent: "Nguyễn Văn A", labelPhone: "Số điện thoại/Zalo *", labelStudent: "Họ và tên học sinh *", placeholderStudent: "Nguyễn Bé B", labelGrade: "Lớp đang học *", selectGrade: "Chọn lớp", labelActivities: "Môn học quan tâm * (có thể chọn nhiều)", errorCourse: "Vui lòng chọn ít nhất một môn.", labelTime: "Khung giờ phù hợp *", timeWeekday: "Sau giờ học từ thứ Hai đến thứ Sáu", timeWeekend: "Cuối tuần", timeFlexible: "Cần được tư vấn thêm", errorTime: "Vui lòng chọn ít nhất một khung giờ.", consent: "Tôi đồng ý để Ban tổ chức liên hệ tư vấn theo thông tin đã cung cấp và xác nhận đã đọc chính sách bảo mật. *", submit: "Đăng ký nhận tư vấn", submitting: "Đang gửi thông tin...", formRequired: "Vui lòng điền đầy đủ các thông tin bắt buộc.", formError: "Chưa thể gửi thông tin. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ.", successTitle: "Đăng ký thành công", successText: "Cảm ơn phụ huynh đã đăng ký. Mã tham chiếu của bạn là {ref}. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.", submitAnother: "Gửi đăng ký khác",
    footerEyebrow: "SNA AFTER SCHOOL · 2026", footerCta: "Cùng con lựa chọn hành trình sau giờ học phù hợp", footerCtaButton: "Đăng ký nhận tư vấn", footerDemo: "Không gian để học sinh khám phá sở thích, rèn luyện kỹ năng và trưởng thành trong môi trường an toàn, chuyên nghiệp.", footerNav: "Khám phá chương trình", footerContact: "Tư vấn phụ huynh", footerCampus: "Địa điểm chương trình", footerAddress: "397 Đường 30/4, Phường Trấn Biên, Đồng Nai", footerOfficial: "Trang chủ SNA", footerPartners: "Phối hợp triển khai chương trình", footerRights: "SNA After School. All rights reserved.", backTop: "Về đầu trang ↑",
    courseAge: "Độ tuổi", courseTime: "Lịch học", coursePrice: "Học phí/HS/buổi", courseInterest: "Tôi quan tâm", categorySports: "Thể thao", categoryMartial: "Võ thuật", categoryArts: "Nghệ thuật biểu diễn"
  },
  en: {
    skip: "Skip to main content", demoBadge: "INFORMATION BEING UPDATED", demoNote: "Schedules, fees and selected program details will be updated after official confirmation.", openMenu: "Open menu", partnerLabel: "In collaboration with",
    navProgram: "Program", navActivities: "Activities", navFees: "Fees", navInstructors: "Instructors", navFaq: "FAQ", navRegister: "Request a consultation",
    heroEyebrow: "SNA AFTER SCHOOL PROGRAM · 2026", heroTitle: "Unlock potential.<br>Build confidence.<br><span>Grow holistically.</span>", heroDescription: "A sports, martial arts and performing arts program for students, hosted at SNA and delivered by a professional team.",
    primaryCta: "Request a consultation", secondaryCta: "Explore 8 activities", trustActivities: "diverse activities", trustGroups: "development areas", trustSaving: "full-course saving",
    proofKicker: "WHAT PARENTS CARE ABOUT", proofTitle: "A safe, professional after-school environment", proof1: "Safety throughout every session", proof2: "Activities suited to each child's interests and age", proof3: "Transparent fees and information", proofDemo: "Detailed procedures will be updated before classes begin.",
    benefitKicker: "A new experience in every session", benefitTitle: "A strong foundation for long-term growth",
    benefit1Title: "Diverse choices", benefit1Text: "Eight activities across sports, martial arts and performing arts.", benefit2Title: "Qualified team", benefit2Text: "Instructor and coach profiles selected for each activity.", benefit3Title: "Easy registration", benefit3Text: "Parents can select multiple activities and preferred time slots.", benefit4Title: "Transparent fees", benefit4Text: "Clear per-session fees and savings based on registration duration.",
    insightSeal: "development pillars", insightKicker: "What parents want", insightTitle: "After school is a time to explore and grow", insightLead: "Through movement and the arts, children can explore their interests, build skills and express themselves with confidence.", pillar1Title: "Healthier", pillar1Text: "Build active habits and improve physical fitness.", pillar2Title: "More confident", pillar2Text: "Express themselves and work confidently with friends.", pillar3Title: "More resilient", pillar3Text: "Develop discipline, perseverance and initiative.", insightCta: "Explore the right activity for your child",
    activitiesKicker: "Explore the program", activitiesTitle: "8 activities across 3 areas", activitiesIntro: "Explore each activity and choose one that suits your child's interests. Schedules and age ranges will be updated after official confirmation.", filterAll: "All", filterSports: "Sports", filterMartial: "Martial arts", filterArts: "Performing arts",
    feesKicker: "Fee information", feesTitle: "Choose the registration plan that suits your family", feesIntro: "Fees are calculated per student and number of sessions. Official fees will be confirmed for each activity schedule.", paySession: "Pay per session", paySessionText: "100% of listed fee", paySession1: "Choose sessions flexibly", paySession2: "No discount applied", payMonthly: "Monthly plan", payMonthlyText: "95% × fee/session × sessions", payMonthly1: "Plan your child's schedule in advance", payMonthly2: "Save 5% on tuition", payCourse: "Full-course plan", payCourseText: "90% × fee/session × total sessions", payCourse1: "Save 10% on tuition", payCourse2: "Maintain a consistent schedule", recommended: "Best-value option", feeCaption: "Reference fees by registration plan", feeBase: "Listed fee", feeMonth: "Monthly −5%", feeCourse: "Full course −10%",
    instructorKicker: "Teaching team", instructorTitle: "Professional – Inspiring", instructorIntro: "Our featured instructors and coaches bring strong professional expertise, years of experience and student-appropriate teaching methods.", instructorFootball: "Football", instructorDance: "Modern dance", instructorKarate: "Karate", instructorBasketball: "Basketball", instructorTaekwondo: "Taekwondo", instructorVovinam: "Vovinam", coach1Role: "Coach · 6 years of experience", coach1Credential: "AFC Coaching Certificate", coach2Role: "Instructor · 9 years of experience", coach2Credential: "Bachelor of Dance Coaching", coach3Role: "Coach · 10 years of experience", coach3Credential: "Karate 4th Dan black belt", coach4Role: "Coach · 10 years of experience", coach4Credential: "Bachelor of Sports Coaching", coach5Role: "Instructor · 15 years of experience", coach5Credential: "Master of Education", coach6Role: "Coach · 20 years of experience", coach6Credential: "Vovinam Master · Second-degree Red Belt",
    operationsKicker: "Safety and operations", operationsTitle: "Peace of mind throughout your child's time in the program", operationsIntro: "Students are checked in, guided and handed over under procedures agreed by the organizing partners.", process1Title: "Session check-in", process1Text: "Attendance is recorded for each class.", process2Title: "Student pickup and handover", process2Text: "Students are handed over to the designated person under the agreed procedure.", process3Title: "Parent support", process3Text: "Parent questions are received and answered through the program's contact channels.",
    facilityKicker: "Facilities at SNA", facilityTitle: "Modern, safe and inspiring learning spaces", facilityNote: "Actual facilities at SNA Marianapolis International School – Bien Hoa Campus.", facility1: "Outdoor sports field", facility2: "Covered swimming pool", facility3: "SNA campus",
    faqTitle: "Frequently asked questions", registerKicker: "Request a consultation", registerTitle: "Get help choosing the right activity", registerIntro: "Contact the program hotlines for advice on activities, schedules and fees.", demoHotline: "Consultation hotlines", contactMsDien: "Ms. Dien", contactMrBach: "Mr. Bach", registerPoint1: "Activity advice based on age and interests", registerPoint2: "Help choosing a suitable schedule", registerPoint3: "Answers about fees and registration", formNotice: "INFORMATION", formDemoAlert: "Please provide the required details so our consultation team can assist you.",
    labelParent: "Parent/guardian full name *", placeholderParent: "John Doe", labelPhone: "Phone/Zalo *", labelStudent: "Student full name *", placeholderStudent: "Jane Doe", labelGrade: "Current grade *", selectGrade: "Select grade", labelActivities: "Activities of interest * (select multiple)", errorCourse: "Please select at least one activity.", labelTime: "Preferred time slots *", timeWeekday: "After school, Monday–Friday", timeWeekend: "Weekend", timeFlexible: "As advised", errorTime: "Please select at least one time slot.", consent: "I agree to be contacted for consultation and to the use of the information provided under the privacy policy. *", submit: "Request a consultation", submitting: "Sending information...", formRequired: "Please complete all required fields.", formError: "We could not send the information. Please try again or contact the hotlines for assistance.", successTitle: "Registration successful", successText: "Thank you for registering. Your reference code is {ref}. We will contact you shortly.", submitAnother: "Submit another registration",
    footerEyebrow: "SNA AFTER SCHOOL · 2026", footerCta: "Choose the right after-school journey for your child", footerCtaButton: "Request a consultation", footerDemo: "A safe, professional environment where students can discover their interests, build skills and grow with confidence.", footerNav: "Explore the program", footerContact: "Parent consultation", footerCampus: "Program location", footerAddress: "397 30/4 Street, Tran Bien Ward, Dong Nai", footerOfficial: "Visit the SNA website", footerPartners: "Program delivery partners", footerRights: "SNA After School. All rights reserved.", backTop: "Back to top ↑",
    courseAge: "Age range", courseTime: "Schedule", coursePrice: "Fee/student/session", courseInterest: "I'm interested", categorySports: "Sports", categoryMartial: "Martial arts", categoryArts: "Performing arts"
  }
};

const courses = [
  { id: "football", group: "sports", vi: "Bóng đá", en: "Football", price: "189.000 ₫", ageVi: "6–12 tuổi", ageEn: "Ages 6–12", timeVi: "T3 & T5 · 16:30", timeEn: "Tue & Thu · 4:30 PM", image: "/assets/sna-official/course-football.webp", official: true },
  { id: "basketball", group: "sports", vi: "Bóng rổ", en: "Basketball", price: "189.000 ₫", ageVi: "7–14 tuổi", ageEn: "Ages 7–14", timeVi: "T2 & T6 · 16:30", timeEn: "Mon & Fri · 4:30 PM", image: "/assets/sna-official/course-basketball.webp", official: true },
  { id: "dance", group: "arts", vi: "Nhảy hiện đại", en: "Modern Dance", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "T4 & T7 · 16:30", timeEn: "Wed & Sat · 4:30 PM", image: "/assets/sna-official/course-dance.webp", official: true },
  { id: "vovinam", group: "martial", vi: "Vovinam", en: "Vovinam", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "T3 & T5 · 17:00", timeEn: "Tue & Thu · 5:00 PM", image: "/assets/generated/courses/vovinam-v1.webp" },
  { id: "taekwondo", group: "martial", vi: "Taekwondo", en: "Taekwondo", price: "189.000 ₫", ageVi: "6–15 tuổi", ageEn: "Ages 6–15", timeVi: "Đang cập nhật", timeEn: "To be updated", image: "/assets/generated/courses/taekwondo-v1.webp" },
  { id: "karate", group: "martial", vi: "Karate", en: "Karate", price: "189.000 ₫", ageVi: "7–15 tuổi", ageEn: "Ages 7–15", timeVi: "Đang cập nhật", timeEn: "To be updated", image: "/assets/generated/courses/karate-v1.webp" },
  { id: "drums", group: "arts", vi: "Trống hội", en: "Festival Drumming", price: "231.000 ₫", ageVi: "8–16 tuổi", ageEn: "Ages 8–16", timeVi: "T7 · 09:00", timeEn: "Sat · 9:00 AM", image: "/assets/generated/courses/festival-drumming-v1.webp" },
  { id: "zither", group: "arts", vi: "Đàn tranh", en: "Vietnamese Zither", price: "389.000 ₫", ageVi: "8–16 tuổi", ageEn: "Ages 8–16", timeVi: "CN · 09:00", timeEn: "Sun · 9:00 AM", image: "/assets/generated/courses/dan-tranh-v1.webp" }
];

const faqs = {
  vi: [
    ["Chương trình phù hợp với độ tuổi nào?", "Độ tuổi phù hợp được quy định riêng cho từng bộ môn. Phụ huynh có thể xem thông tin trên từng môn học hoặc liên hệ hotline để được tư vấn."],
    ["Một học sinh có thể đăng ký nhiều môn không?", "Có. Học sinh có thể đăng ký nhiều môn nếu lịch học không trùng nhau và lớp còn chỗ."],
    ["Học phí được tính như thế nào?", "Học phí được tính theo học sinh và số buổi học. Phụ huynh dự kiến được giảm 5% khi đăng ký theo tháng và 10% khi đăng ký trọn khóa."],
    ["Khi nào lịch học và ngày khai giảng được xác nhận?", "Lịch học và ngày khai giảng sẽ được cập nhật sau khi các lớp đủ điều kiện mở."],
    ["Quy định học bù, bảo lưu và hoàn phí ra sao?", "Chính sách học bù, bảo lưu và hoàn phí sẽ được thông báo trước khi phụ huynh hoàn tất đăng ký."],
    ["Bao lâu sau khi đăng ký tôi sẽ được liên hệ?", "Bộ phận tư vấn sẽ liên hệ sau khi tiếp nhận thông tin. Nếu cần hỗ trợ sớm, phụ huynh có thể gọi trực tiếp qua hotline của chương trình."]
  ],
  en: [
    ["What ages is the program designed for?", "Each activity has its own age range. See the activity details or contact the hotlines for advice."],
    ["Can one student register for multiple activities?", "Yes. Students may join multiple activities if schedules do not overlap and places remain available."],
    ["How are fees calculated?", "Per student per session, with a proposed 5% monthly-plan saving and 10% full-course saving."],
    ["When will schedules and start dates be confirmed?", "They will be updated after the operations team confirms schedules and class-opening conditions."],
    ["What are the make-up, deferral and refund rules?", "These policies will be shared before parents complete registration."],
    ["How soon will I be contacted after registration?", "Our consultation team will contact you after receiving your registration. For immediate assistance, please call the program hotlines."]
  ]
};

let currentLang = localStorage.getItem("sna_demo_lang") || "vi";
let activeFilter = "all";

function text(key) { return content[currentLang][key] || key; }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("sna_demo_lang", lang);
  document.documentElement.lang = lang;
  document.title = lang === "vi" ? "SNA After School | Chương trình sau giờ học" : "SNA After School | After-School Program";
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
    const imageAlt = currentLang === "vi"
      ? `${name} – hoạt động dành cho học sinh`
      : `${name} – student activity`;
    const visual = course.image
      ? `<div class="course-visual"><img src="${course.image}" alt="${imageAlt}" loading="lazy" width="600" height="400"></div>`
      : `<div class="course-visual placeholder"><span class="placeholder-mark">${course.icon}</span></div>`;
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
if (stickyCta) {
  const updateStickyCta = () => stickyCta.classList.toggle("is-visible", heroPassed && !registerVisible);
  new IntersectionObserver(([entry]) => { heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0; updateStickyCta(); }, { threshold: 0 }).observe(document.querySelector(".hero"));
  new IntersectionObserver(([entry]) => { registerVisible = entry.isIntersecting; updateStickyCta(); }, { threshold: .05 }).observe(document.getElementById("register"));
}

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
    activities: selectedCourses, timeSlots: selectedTimes, consent: form.elements.consent.checked, locale: currentLang
  };
  submitButton.disabled = true;
  submitButton.querySelector("span").textContent = text("submitting");
  try {
    const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || "Submission failed");

    track("submit_form", { selected_courses_count: selectedCourses.length, demo: false });

    const leadData = {
      reference: data.reference || "N/A",
      parentName: payload.parentName,
      studentName: payload.studentName,
      activities: payload.activities
    };
    sessionStorage.setItem("sna_lead_data", JSON.stringify(leadData));
    window.location.href = "/thank-you.html";

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
