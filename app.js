document.documentElement.classList.add("js");

const content = {
  vi: {
    skip: "Bỏ qua đến nội dung chính", demoBadge: "THÔNG TIN ĐANG CẬP NHẬT", demoNote: "Lịch học, học phí và một số thông tin chương trình sẽ được cập nhật sau khi có xác nhận chính thức.", openMenu: "Mở menu", partnerLabel: "Phối hợp triển khai",
    navProgram: "Chương trình", navActivities: "Môn học", navFees: "Học phí", navInstructors: "Giảng viên", navFaq: "Câu hỏi thường gặp", navRegister: "Đăng ký miễn phí",
    heroEyebrow: "TRẢI NGHIỆM MIỄN PHÍ TỪ 02/10 ĐẾN 16/10/2026", heroTitle: "Khơi mở năng khiếu.<br>Rèn luyện bản lĩnh.<br><span>Phát triển toàn diện.</span>", heroDescription: "Hai tuần trải nghiệm thể thao, võ thuật và nghệ thuật tại SNA. Học vào Thứ Ba và Thứ Sáu, từ 15:30 đến 16:30.",
    primaryCta: "Đăng ký xếp lớp trải nghiệm miễn phí", secondaryCta: "Xem đầu ra 8 bộ môn", trustActivities: "tuần trải nghiệm miễn phí", trustGroups: "15:30–16:30", trustSaving: "bộ môn để khám phá",
    proofKicker: "THÔNG TIN TRẢI NGHIỆM", proofTitle: "Đăng ký sớm để được ưu tiên xếp lớp", proof1: "Miễn phí 100% từ 02/10 đến 16/10/2026", proof2: "Thứ Ba và Thứ Sáu · 15:30–16:30", proof3: "Số lượng học sinh ở mỗi môn có giới hạn", proofDemo: "Đăng ký sớm đến hết 29/09/2026, ưu tiên theo thứ tự đăng ký.",
    earlyRegistrationOpen: "Đăng ký sớm đến hết 29/09/2026, ưu tiên theo thứ tự đăng ký.", earlyRegistrationClosed: "Đăng ký ngay – lớp trải nghiệm được xếp theo tình trạng chỗ trống.",
    trialKicker: "02 TUẦN TRẢI NGHIỆM MIỄN PHÍ", trialTitle: "Cho con khám phá môn học phù hợp trước khi vào khóa chính thức", trialDateLabel: "Thời gian trải nghiệm", trialDate: "02/10–16/10/2026", trialScheduleLabel: "Lịch học", trialSchedule: "Thứ Ba & Thứ Sáu · 15:30–16:30", trialFeeLabel: "Học phí trải nghiệm", trialFee: "Miễn phí 100%", trialCapacityLabel: "Lựa chọn đa dạng", trialCapacity: "08 bộ môn · 03 lĩnh vực phát triển", trialPeriodShort: "Từ 02/10 đến 16/10/2026",
    benefitKicker: "Mỗi buổi học, thêm một trải nghiệm mới", benefitTitle: "Tạo nền tảng để con phát triển lâu dài",
    benefit1Title: "Đa dạng lựa chọn", benefit1Text: "8 bộ môn thuộc ba lĩnh vực: thể thao, võ thuật và nghệ thuật biểu diễn.", benefit2Title: "Đội ngũ chuyên môn", benefit2Text: "Giảng viên và huấn luyện viên có chuyên môn phù hợp với từng bộ môn.", benefit3Title: "Thuận tiện đăng ký", benefit3Text: "Dễ dàng lựa chọn môn học và khung giờ phù hợp với lịch của gia đình.", benefit4Title: "Học phí minh bạch", benefit4Text: "Học phí được công bố rõ ràng theo từng buổi và từng hình thức đăng ký.",
    insightSeal: "trụ cột phát triển", insightKicker: "Điều phụ huynh mong muốn", insightTitle: "Hoạt động ngoại khóa là thời gian để con khám phá và trưởng thành", insightLead: "Thông qua vận động và nghệ thuật, con có thêm cơ hội khám phá sở thích, rèn luyện kỹ năng và tự tin thể hiện bản thân.", pillar1Title: "Khỏe hơn", pillar1Text: "Hình thành thói quen vận động và nâng cao thể lực.", pillar2Title: "Tự tin hơn", pillar2Text: "Tự tin thể hiện bản thân và phối hợp cùng bạn bè.", pillar3Title: "Trưởng thành hơn", pillar3Text: "Rèn tính kỷ luật, sự kiên trì và tinh thần chủ động.", insightCta: "Khám phá môn học phù hợp với con",
    activitiesKicker: "Khám phá chương trình", activitiesTitle: "08 hoạt động ngoại khóa thuộc 3 lĩnh vực", activitiesIntro: "Mỗi bộ môn có lộ trình, độ tuổi và đầu ra cụ thể để phụ huynh dễ dàng lựa chọn hoạt động phù hợp với con.", filterAll: "Tất cả", filterSports: "Thể thao", filterMartial: "Võ thuật", filterArts: "Nghệ thuật biểu diễn",
    feesKicker: "Thông tin học phí", feesTitle: "Lựa chọn hình thức đăng ký phù hợp", feesIntro: "Học phí được công bố theo tháng và trọn khóa. Chương trình ưu đãi toàn khóa áp dụng từ 23/09 đến 16/10/2026.", payMonthly: "Theo tháng", payMonthlyText: "Áp dụng cho 8 buổi học mỗi tháng", payMonthly1: "Chủ động kế hoạch học tập", payMonthly2: "Tiết kiệm 5% học phí", payCourse: "Đăng ký trọn khóa", payCourseText: "Áp dụng từ 23/09 đến 16/10/2026", payCourse1: "Ưu đãi trực tiếp trên học phí toàn khóa", payCourse2: "Duy trì lịch học ổn định", recommended: "Ưu đãi tuyển sinh", paySibling: "Ưu đãi anh/chị/em", paySiblingText: "Mức ưu đãi tối đa", paySibling1: "Dành cho anh/chị/em ruột", paySibling2: "Cùng đăng ký một bộ môn", monthlyFeeCaption: "Học phí theo tháng · 8 buổi/tháng", feeGroup: "Nhóm môn", feeMonthlyBase: "Học phí gốc/tháng", feeMonthlyDiscount: "Sau giảm 5%", feeStandardGroup: "Các môn tiêu chuẩn", feeDrums: "Trống hội", feeZither: "Đàn tranh", courseFeeCaption: "Học phí trọn khóa và ưu đãi tuyển sinh", feeSubjects: "Bộ môn", feeDuration: "Thời lượng", feeOriginal: "Học phí gốc", feeDiscount20: "Giảm 20%", feeSibling25: "Anh/chị/em giảm 25%", feeTwoMonthSubjects: "Karate, Bóng đá, Bóng rổ, Nhảy hiện đại", feeThreeMonthMartial: "Vovinam, Taekwondo", twoMonths: "2 tháng", threeMonths: "3 tháng", feeSiblingNote: "Ưu đãi 25% chỉ áp dụng khi anh/chị/em ruột cùng đăng ký một bộ môn.",
    instructorKicker: "Đội ngũ giảng dạy", instructorTitle: "Chuyên nghiệp – Đầy cảm hứng", instructorIntro: "Các giảng viên và huấn luyện viên tiêu biểu có chuyên môn vững vàng, nhiều năm kinh nghiệm và phương pháp hướng dẫn phù hợp với học sinh.", instructorFootball: "Bóng đá", instructorDance: "Nhảy hiện đại", instructorKarate: "Karate", instructorBasketball: "Bóng rổ", instructorTaekwondo: "Taekwondo", instructorVovinam: "Vovinam", coach1Role: "Huấn luyện viên · 6 năm kinh nghiệm", coach1Credential: "Chứng chỉ Huấn luyện viên AFC", coach2Role: "Giảng viên · 9 năm kinh nghiệm", coach2Credential: "Cử nhân Huấn luyện Múa", coach3Role: "Huấn luyện viên · 10 năm kinh nghiệm", coach3Credential: "Đai đen Tứ đẳng Karate", coach4Role: "Huấn luyện viên · 10 năm kinh nghiệm", coach4Credential: "Cử nhân Huấn luyện Thể thao", coach5Role: "Giảng viên · 15 năm kinh nghiệm", coach5Credential: "Thạc sĩ Giáo dục học", coach6Role: "Huấn luyện viên · 20 năm kinh nghiệm", coach6Credential: "Võ sư Cao đẳng Hồng đai Nhị",
    operationsKicker: "An toàn và vận hành", operationsTitle: "An tâm trong suốt thời gian con tham gia chương trình", operationsIntro: "Học sinh được điểm danh, hướng dẫn và bàn giao theo quy trình thống nhất giữa các đơn vị tổ chức.", process1Title: "Điểm danh đầu buổi", process1Text: "Điểm danh học sinh theo danh sách của từng lớp.", process2Title: "Đón và bàn giao học sinh", process2Text: "Học sinh được bàn giao đúng người phụ trách theo quy trình đã thống nhất.", process3Title: "Hỗ trợ phụ huynh", process3Text: "Các thắc mắc của phụ huynh được tiếp nhận và phản hồi qua kênh liên hệ của chương trình.",
    facilityKicker: "Cơ sở vật chất tại SNA", facilityTitle: "Không gian học tập hiện đại, an toàn và truyền cảm hứng", facilityNote: "Hình ảnh thực tế tại SNA Marianapolis International School – Biên Hòa Campus.", facility1: "Sân thể thao ngoài trời", facility2: "Hồ bơi có mái che", facility3: "Khuôn viên SNA",
    faqTitle: "Phụ huynh thường hỏi", registerKicker: "Đăng ký trải nghiệm", registerTitle: "Đăng ký xếp lớp trải nghiệm miễn phí", registerIntro: "Số lượng học sinh ở mỗi bộ môn có giới hạn. Nhà trường ưu tiên xếp lớp theo thứ tự đăng ký.", demoHotline: "Hotline & Zalo", contactMrVuong: "Mr Vương", zaloContact: "Nhắn Zalo", registerPoint1: "Trải nghiệm miễn phí từ 02/10 đến 16/10/2026", registerPoint2: "Thứ Ba và Thứ Sáu · 15:30–16:30", registerPoint3: "Đăng ký sớm để được ưu tiên xếp lớp", formNotice: "THÔNG TIN", formDemoAlert: "Vui lòng điền đầy đủ thông tin để bộ phận tư vấn liên hệ hỗ trợ.",
    labelParent: "Họ và tên phụ huynh *", placeholderParent: "Nguyễn Văn A", labelPhone: "Số điện thoại/Zalo *", labelStudent: "Họ và tên học sinh *", placeholderStudent: "Nguyễn Bé B", labelGrade: "Lớp con đang học *", placeholderGrade: "Ví dụ: Lớp 3.2, Lớp 5S1", labelProgram: "Chương trình con đang học: *", programSbs: "Khối SBS", programSmint: "Khối SMINT", labelActivities: "Môn học quan tâm * (có thể chọn nhiều)", errorCourse: "Vui lòng chọn ít nhất một môn.", labelTime: "Lịch trải nghiệm", timeWeekday: "Thứ Ba và Thứ Sáu · 15:30–16:30", errorTime: "Vui lòng chọn ít nhất một khung giờ.", consent: "Tôi đồng ý để Ban tổ chức liên hệ tư vấn theo thông tin đã cung cấp và xác nhận đã đọc chính sách bảo mật. *", submit: "Đăng ký trải nghiệm miễn phí", submitting: "Đang gửi thông tin...", formRequired: "Vui lòng điền đầy đủ các thông tin bắt buộc.", formValidationError: "Vui lòng kiểm tra lại họ tên, chương trình, lớp và số điện thoại. Số điện thoại có thể nhập dạng 0901234567 hoặc +84 901 234 567.", formError: "Chưa thể gửi thông tin. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ.", successTitle: "Đăng ký thành công", successText: "Cảm ơn phụ huynh đã đăng ký. Mã đăng ký của bạn là {ref}. Bộ phận phụ trách sẽ liên hệ để xác nhận lớp trải nghiệm.", submitAnother: "Gửi đăng ký khác",
    footerEyebrow: "SNA CCA · 2026-2027", footerCta: "Cho con trải nghiệm miễn phí và khám phá môn học phù hợp", footerCtaButton: "Đăng ký trải nghiệm miễn phí", footerDemo: "Không gian để học sinh khám phá sở thích, rèn luyện kỹ năng và trưởng thành trong môi trường an toàn, chuyên nghiệp.", footerNav: "Khám phá chương trình", footerContact: "Tư vấn phụ huynh", footerCampus: "Địa điểm chương trình", footerAddress: "397 Đường 30/4, Phường Trấn Biên, Đồng Nai", footerOfficial: "Trang chủ SNA", footerPartners: "Phối hợp triển khai chương trình", footerRights: "SNA CCA. All rights reserved.", backTop: "Về đầu trang ↑",
    courseAge: "Độ tuổi", courseDuration: "Thời lượng khóa", courseOutcome: "Đầu ra trọng điểm", coursePrice: "Học phí/HS/buổi", courseInterest: "Đăng ký trải nghiệm", categorySports: "Thể thao", categoryMartial: "Võ thuật", categoryArts: "Nghệ thuật biểu diễn"
  },
  en: {
    skip: "Skip to main content", demoBadge: "INFORMATION BEING UPDATED", demoNote: "Schedules, fees and selected program details will be updated after official confirmation.", openMenu: "Open menu", partnerLabel: "In collaboration with",
    navProgram: "Program", navActivities: "Activities", navFees: "Fees", navInstructors: "Instructors", navFaq: "FAQ", navRegister: "Register free",
    heroEyebrow: "FREE TRIAL FROM 2 TO 16 OCTOBER 2026", heroTitle: "Unlock potential.<br>Build confidence.<br><span>Grow holistically.</span>", heroDescription: "Two weeks of sports, martial arts and performing arts experiences at SNA, every Tuesday and Friday from 3:30 to 4:30 PM.",
    primaryCta: "Register for a free trial class", secondaryCta: "Explore outcomes for 8 activities", trustActivities: "weeks of free trial classes", trustGroups: "3:30–4:30 PM", trustSaving: "activities to explore",
    proofKicker: "FREE TRIAL DETAILS", proofTitle: "Register early for priority class placement", proof1: "100% free from 2 to 16 October 2026", proof2: "Tuesdays and Fridays · 3:30–4:30 PM", proof3: "Places are limited for each activity", proofDemo: "Early registration closes on 29 September 2026. Places are allocated in registration order.",
    earlyRegistrationOpen: "Early registration closes on 29 September 2026. Places are allocated in registration order.", earlyRegistrationClosed: "Register now – trial classes are allocated subject to availability.",
    trialKicker: "TWO WEEKS OF FREE TRIAL CLASSES", trialTitle: "Let your child explore the right activity before joining the full program", trialDateLabel: "Trial period", trialDate: "2–16 October 2026", trialScheduleLabel: "Schedule", trialSchedule: "Tuesdays & Fridays · 3:30–4:30 PM", trialFeeLabel: "Trial fee", trialFee: "100% free", trialCapacityLabel: "More ways to explore", trialCapacity: "08 activities · 03 areas of development", trialPeriodShort: "From 2 to 16 October 2026",
    benefitKicker: "A new experience in every session", benefitTitle: "A strong foundation for long-term growth",
    benefit1Title: "Diverse choices", benefit1Text: "Eight activities across sports, martial arts and performing arts.", benefit2Title: "Qualified team", benefit2Text: "Instructor and coach profiles selected for each activity.", benefit3Title: "Easy registration", benefit3Text: "Parents can select multiple activities and preferred time slots.", benefit4Title: "Transparent fees", benefit4Text: "Clear per-session fees and savings based on registration duration.",
    insightSeal: "development pillars", insightKicker: "What parents want", insightTitle: "CCA is a time to explore and grow", insightLead: "Through movement and the arts, children can explore their interests, build skills and express themselves with confidence.", pillar1Title: "Healthier", pillar1Text: "Build active habits and improve physical fitness.", pillar2Title: "More confident", pillar2Text: "Express themselves and work confidently with friends.", pillar3Title: "More resilient", pillar3Text: "Develop discipline, perseverance and initiative.", insightCta: "Explore the right activity for your child",
    activitiesKicker: "Explore the program", activitiesTitle: "08 co-curricular activities across 3 areas", activitiesIntro: "Each activity has a clear learning pathway, age range and intended outcomes to help families choose with confidence.", filterAll: "All", filterSports: "Sports", filterMartial: "Martial arts", filterArts: "Performing arts",
    feesKicker: "Fee information", feesTitle: "Choose the registration plan that suits your family", feesIntro: "Fees are published for monthly and full-course plans. The full-course promotion runs from 23 September to 16 October 2026.", payMonthly: "Monthly plan", payMonthlyText: "Based on 8 sessions per month", payMonthly1: "Plan learning in advance", payMonthly2: "Save 5% on tuition", payCourse: "Full-course plan", payCourseText: "Available from 23 September to 16 October 2026", payCourse1: "20% off the full-course tuition", payCourse2: "Maintain a consistent learning schedule", recommended: "Enrolment offer", paySibling: "Sibling offer", paySiblingText: "Maximum available saving", paySibling1: "For siblings from the same family", paySibling2: "When joining the same activity", monthlyFeeCaption: "Monthly tuition · 8 sessions per month", feeGroup: "Activity group", feeMonthlyBase: "Standard monthly fee", feeMonthlyDiscount: "After 5% discount", feeStandardGroup: "Standard activities", feeDrums: "Festival Drumming", feeZither: "Vietnamese Zither", courseFeeCaption: "Full-course tuition and enrolment offers", feeSubjects: "Activities", feeDuration: "Duration", feeOriginal: "Standard tuition", feeDiscount20: "20% discount", feeSibling25: "Sibling rate · 25% off", feeTwoMonthSubjects: "Karate, Football, Basketball, Modern Dance", feeThreeMonthMartial: "Vovinam, Taekwondo", twoMonths: "2 months", threeMonths: "3 months", feeSiblingNote: "The 25% sibling offer applies only when siblings enrol in the same activity.",
    instructorKicker: "Teaching team", instructorTitle: "Professional – Inspiring", instructorIntro: "Our featured instructors and coaches bring strong professional expertise, years of experience and student-appropriate teaching methods.", instructorFootball: "Football", instructorDance: "Modern dance", instructorKarate: "Karate", instructorBasketball: "Basketball", instructorTaekwondo: "Taekwondo", instructorVovinam: "Vovinam", coach1Role: "Coach · 6 years of experience", coach1Credential: "AFC Coaching Certificate", coach2Role: "Instructor · 9 years of experience", coach2Credential: "Bachelor of Dance Coaching", coach3Role: "Coach · 10 years of experience", coach3Credential: "Karate 4th Dan black belt", coach4Role: "Coach · 10 years of experience", coach4Credential: "Bachelor of Sports Coaching", coach5Role: "Instructor · 15 years of experience", coach5Credential: "Master of Education", coach6Role: "Coach · 20 years of experience", coach6Credential: "Vovinam Master · Second-degree Red Belt",
    operationsKicker: "Safety and operations", operationsTitle: "Peace of mind throughout your child's time in the program", operationsIntro: "Students are checked in, guided and handed over under procedures agreed by the organizing partners.", process1Title: "Session check-in", process1Text: "Attendance is recorded for each class.", process2Title: "Student pickup and handover", process2Text: "Students are handed over to the designated person under the agreed procedure.", process3Title: "Parent support", process3Text: "Parent questions are received and answered through the program's contact channels.",
    facilityKicker: "Facilities at SNA", facilityTitle: "Modern, safe and inspiring learning spaces", facilityNote: "Actual facilities at SNA Marianapolis International School – Bien Hoa Campus.", facility1: "Outdoor sports field", facility2: "Covered swimming pool", facility3: "SNA campus",
    faqTitle: "Frequently asked questions", registerKicker: "Free trial registration", registerTitle: "Register for a free trial class", registerIntro: "Places are limited for each activity. Class placements are prioritised in registration order.", demoHotline: "Hotline & Zalo", contactMrVuong: "Mr Vuong", zaloContact: "Message on Zalo", registerPoint1: "Free trial classes from 2 to 16 October 2026", registerPoint2: "Tuesdays and Fridays · 3:30–4:30 PM", registerPoint3: "Register early for priority class placement", formNotice: "INFORMATION", formDemoAlert: "Please provide the required details so our consultation team can assist you.",
    labelParent: "Parent/guardian full name *", placeholderParent: "John Doe", labelPhone: "Phone/Zalo *", labelStudent: "Student full name *", placeholderStudent: "Jane Doe", labelGrade: "Child's current class *", placeholderGrade: "For example: Class 3.2 or Class 5S1", labelProgram: "Child's current program: *", programSbs: "SBS Program", programSmint: "SMINT Program", labelActivities: "Activities of interest * (select multiple)", errorCourse: "Please select at least one activity.", labelTime: "Trial schedule", timeWeekday: "Tuesdays and Fridays · 3:30–4:30 PM", errorTime: "Please select at least one time slot.", consent: "I agree to be contacted for consultation and to the use of the information provided under the privacy policy. *", submit: "Register for a free trial", submitting: "Sending information...", formRequired: "Please complete all required fields.", formValidationError: "Please check the names, program, class and phone number. You can enter a Vietnamese number as 0901234567 or +84 901 234 567.", formError: "We could not send the information. Please try again or contact the hotlines for assistance.", successTitle: "Registration successful", successText: "Thank you for registering. Your registration code is {ref}. Our team will contact you to confirm the trial class.", submitAnother: "Submit another registration",
    footerEyebrow: "SNA CCA · 2026-2027", footerCta: "Give your child a free trial and discover the right activity", footerCtaButton: "Register for a free trial", footerDemo: "A safe, professional environment where students can discover their interests, build skills and grow with confidence.", footerNav: "Explore the program", footerContact: "Parent consultation", footerCampus: "Program location", footerAddress: "397 30/4 Street, Tran Bien Ward, Dong Nai", footerOfficial: "Visit the SNA website", footerPartners: "Program delivery partners", footerRights: "SNA CCA. All rights reserved.", backTop: "Back to top ↑",
    courseAge: "Age range", courseDuration: "Course duration", courseOutcome: "Key outcome", coursePrice: "Fee/student/session", courseInterest: "Register for a trial", categorySports: "Sports", categoryMartial: "Martial arts", categoryArts: "Performing arts"
  }
};

const courses = [
  { id: "football", group: "sports", vi: "Bóng đá", en: "Football", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "2 tháng", durationEn: "2 months", outcomeVi: "Thực hiện kỹ thuật sút, dẫn và dừng bóng; biết phối hợp đồng đội và vận dụng luật trong trận đấu nhỏ.", outcomeEn: "Apply core shooting, dribbling and ball-control skills while learning teamwork and the rules through small-sided games.", image: "/assets/sna-official/course-football.webp", official: true },
  { id: "basketball", group: "sports", vi: "Bóng rổ", en: "Basketball", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "2 tháng", durationEn: "2 months", outcomeVi: "Thành thạo kỹ thuật dẫn, chuyền, lên rổ và phòng thủ cơ bản; vận dụng trong thi đấu.", outcomeEn: "Build confident dribbling, passing, layup and defensive skills, then apply them in game situations.", image: "/assets/sna-official/course-basketball.webp", official: true },
  { id: "dance", group: "arts", vi: "Nhảy hiện đại", en: "Modern Dance", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "2 tháng", durationEn: "2 months", outcomeVi: "Hoàn thành một bài biểu diễn theo nhóm và nhận video lưu niệm cuối khóa.", outcomeEn: "Complete a group performance and receive a keepsake video at the end of the course.", image: "/assets/sna-official/course-dance.webp", official: true },
  { id: "vovinam", group: "martial", vi: "Vovinam", en: "Vovinam", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "3 tháng", durationEn: "3 months", outcomeVi: "Thực hiện các kỹ thuật tự vệ thực tế, té ngã an toàn và hình thành tinh thần võ đạo Việt Nam.", outcomeEn: "Practise practical self-defence and safe falling techniques while developing the values of Vietnamese martial arts.", image: "/assets/generated/courses/vovinam-v1.webp" },
  { id: "taekwondo", group: "martial", vi: "Taekwondo", en: "Taekwondo", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "3 tháng", durationEn: "3 months", outcomeVi: "Phát triển kỹ thuật quyền, đối kháng và nền tảng thi lên cấp theo hệ thống đai.", outcomeEn: "Develop poomsae and sparring skills while building a foundation for progression through the belt system.", image: "/assets/generated/courses/taekwondo-v1.webp" },
  { id: "karate", group: "martial", vi: "Karate", en: "Karate", price: "189.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "2 tháng", durationEn: "2 months", outcomeVi: "Nắm kỹ thuật Kihon, đòn chân, Tewaza và Bunkai; đủ điều kiện tham gia kỳ thi thăng cấp cuối khóa.", outcomeEn: "Learn Kihon, kicking techniques, Tewaza and Bunkai, with the opportunity to take an end-of-course grading assessment.", image: "/assets/generated/courses/karate-v1.webp" },
  { id: "drums", group: "arts", vi: "Trống hội", en: "Festival Drumming", price: "231.000 ₫", ageVi: "Từ 6 tuổi", ageEn: "Ages 6+", durationVi: "3 tháng", durationEn: "3 months", outcomeVi: "Nội dung và đầu ra đang được cập nhật.", outcomeEn: "Course content and learning outcomes are being finalised.", image: "/assets/generated/courses/festival-drumming-v1.webp" },
  { id: "zither", group: "arts", vi: "Đàn tranh", en: "Vietnamese Zither", price: "389.000 ₫", ageVi: "Từ 9 tuổi", ageEn: "Ages 9+", durationVi: "3 tháng", durationEn: "3 months", outcomeVi: "Hiểu nguồn gốc nhạc cụ, thực hiện kỹ thuật tay cơ bản và trình diễn một tác phẩm dân ca.", outcomeEn: "Explore the instrument's heritage, learn essential hand techniques and perform a Vietnamese folk piece.", image: "/assets/generated/courses/dan-tranh-v1.webp" }
];

const faqs = {
  vi: [
    ["Chương trình trải nghiệm miễn phí diễn ra khi nào?", "Chương trình kéo dài từ 02/10 đến 16/10/2026, vào Thứ Ba và Thứ Sáu, từ 15:30 đến 16:30."],
    ["Lớp trải nghiệm được sắp xếp như thế nào?", "Số lượng học sinh ở mỗi bộ môn có giới hạn. Nhà trường ưu tiên xếp lớp theo thứ tự đăng ký và tình trạng chỗ trống."],
    ["Một học sinh có thể đăng ký nhiều môn không?", "Có. Phụ huynh có thể chọn nhiều môn quan tâm. Bộ phận phụ trách sẽ liên hệ để xác nhận lớp phù hợp theo lịch và số chỗ còn lại."],
    ["Chương trình phù hợp với độ tuổi nào và kéo dài bao lâu?", "Các môn dành cho học sinh từ 6 tuổi; riêng Đàn tranh dành cho học sinh từ 9 tuổi. Khóa Bóng đá, Bóng rổ, Nhảy hiện đại và Karate kéo dài 2 tháng; Vovinam, Taekwondo, Đàn tranh và Trống hội kéo dài 3 tháng."],
    ["Ưu đãi học phí được áp dụng như thế nào?", "Đăng ký theo tháng được giảm 5%. Đăng ký trọn khóa từ 23/09 đến 16/10/2026 được giảm 20%. Anh/chị/em ruột cùng đăng ký một môn được hưởng mức ưu đãi tối đa 25%."],
    ["Võ phục có nằm trong học phí không?", "Không. Võ phục dự kiến khoảng 250.000 đồng và được tính riêng. Thông tin chiều cao, cân nặng sẽ được thu thập khi tư vấn để chuẩn bị kích cỡ phù hợp."],
    ["Nội dung môn Trống hội đã được xác nhận chưa?", "Nội dung chi tiết và đầu ra môn Trống hội đang được cập nhật. Bộ phận phụ trách sẽ thông báo khi chương trình được xác nhận."]
  ],
  en: [
    ["When do the free trial classes take place?", "The free trial period runs from 2 to 16 October 2026, every Tuesday and Friday from 3:30 to 4:30 PM."],
    ["How are trial places allocated?", "Places are limited for each activity and are allocated in registration order, subject to availability."],
    ["Can one student register interest in more than one activity?", "Yes. Parents may select several activities. Our team will confirm the most suitable available class based on the schedule and remaining places."],
    ["What ages are the activities for, and how long are the courses?", "Most activities are open to students aged 6 and above; Vietnamese Zither starts at age 9. Football, Basketball, Modern Dance and Karate run for 2 months. Vovinam, Taekwondo, Vietnamese Zither and Festival Drumming run for 3 months."],
    ["How do the tuition offers work?", "Monthly enrolment receives a 5% discount. Full-course enrolment from 23 September to 16 October 2026 receives 20% off. Siblings joining the same activity may receive up to 25% off."],
    ["Is the martial arts uniform included in tuition?", "No. Uniforms are expected to cost approximately VND 250,000 and are charged separately. Height and weight details will be collected during consultation to prepare the right size."],
    ["Has the Festival Drumming curriculum been confirmed?", "The detailed curriculum and learning outcomes are still being finalised. Our team will share an update once confirmed."]
  ]
};

let currentLang = localStorage.getItem("sna_demo_lang") || "vi";
let activeFilter = "all";

function text(key) { return content[currentLang][key] || key; }

function isEarlyRegistrationOpen() {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return Number(`${values.year}${values.month}${values.day}`) <= 20260929;
}

function updatePageMetadata(lang) {
  const metadata = lang === "vi"
    ? {
        title: "SNA CCA | Trải nghiệm ngoại khóa miễn phí 02/10–16/10/2026",
        description: "Đăng ký 2 tuần trải nghiệm miễn phí 8 bộ môn CCA tại SNA, từ 02/10 đến 16/10/2026, vào Thứ Ba và Thứ Sáu lúc 15:30–16:30.",
        socialTitle: "SNA CCA | 2 tuần trải nghiệm ngoại khóa miễn phí",
        socialDescription: "Trải nghiệm 8 bộ môn tại SNA từ 02/10 đến 16/10/2026. Thứ Ba và Thứ Sáu, 15:30–16:30."
      }
    : {
        title: "SNA CCA | Free trial classes from 2–16 October 2026",
        description: "Register for two weeks of free trial classes across 8 SNA CCA activities, every Tuesday and Friday from 3:30 to 4:30 PM.",
        socialTitle: "SNA CCA | Two weeks of free trial classes",
        socialDescription: "Explore 8 activities at SNA from 2 to 16 October 2026, every Tuesday and Friday from 3:30 to 4:30 PM."
      };
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.socialTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.socialDescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.socialTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.socialDescription);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("sna_demo_lang", lang);
  document.documentElement.lang = lang;
  updatePageMetadata(lang);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = content[lang][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = content[lang][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll("[data-label-i18n]").forEach((element) => {
    const value = content[lang][element.dataset.labelI18n];
    if (value !== undefined) element.dataset.label = value;
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-i18n='heroTitle']").forEach((element) => { element.innerHTML = content[lang].heroTitle; });
  const deadlineKey = isEarlyRegistrationOpen() ? "earlyRegistrationOpen" : "earlyRegistrationClosed";
  document.querySelectorAll("[data-deadline-i18n]").forEach((element) => { element.textContent = content[lang][deadlineKey]; });
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
    const duration = currentLang === "vi" ? course.durationVi : course.durationEn;
    const outcome = currentLang === "vi" ? course.outcomeVi : course.outcomeEn;
    const imageAlt = currentLang === "vi"
      ? `${name} – hoạt động dành cho học sinh`
      : `${name} – student activity`;
    const visual = course.image
      ? `<div class="course-visual"><img src="${course.image}" alt="${imageAlt}" loading="lazy" width="600" height="400"></div>`
      : `<div class="course-visual placeholder"><span class="placeholder-mark">${course.icon}</span></div>`;
    return `<article class="course-card" data-group="${course.group}" ${activeFilter !== "all" && activeFilter !== course.group ? "hidden" : ""}>${visual}<div class="course-body"><span class="course-category">${categoryLabel(course.group)}</span><h3>${name}</h3><div class="course-meta"><span><b>${text("courseAge")}</b>${age}</span><span><b>${text("courseDuration")}</b>${duration}</span></div><div class="course-outcome"><small>${text("courseOutcome")}</small><p>${outcome}</p></div><div class="course-price"><div><small>${text("coursePrice")}</small><strong>${course.price}</strong></div><button type="button" class="select-course" data-course="${course.id}">${text("courseInterest")}</button></div></div></article>`;
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
  const targets = document.querySelectorAll(".trial-panel, .section-heading, .benefit-card, .course-card, .price-card, .instructor-card, .process-list article, .faq-item, .form-card, .insight-image, .insight-copy");
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
  const selectedTimes = ["weekday"];
  const courseError = document.getElementById("course-error");
  courseError.classList.toggle("is-visible", selectedCourses.length === 0);
  if (!form.checkValidity() || selectedCourses.length === 0) {
    formMessage.textContent = text("formRequired");
    formMessage.classList.add("is-visible");
    form.reportValidity();
    track("form_error", { error_type: "validation" });
    return;
  }
  if (form.elements.company.value) return;
  const payload = {
    parentName: form.elements.parentName.value.trim(), phone: form.elements.phone.value.trim(), studentName: form.elements.studentName.value.trim(), program: form.elements.program.value, grade: form.elements.grade.value.trim(),
    activities: selectedCourses, timeSlots: selectedTimes, consent: form.elements.consent.checked, locale: currentLang
  };
  submitButton.disabled = true;
  submitButton.querySelector("span").textContent = text("submitting");
  try {
    const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
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
    formMessage.textContent = error.message === "validation_failed" ? text("formValidationError") : text("formError");
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
