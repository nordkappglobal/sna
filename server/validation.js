const { randomBytes } = require("node:crypto");
const { z } = require("zod");

const ACTIVITIES = ["football", "basketball", "dance", "vovinam", "taekwondo", "karate", "drums", "zither"];
const TIME_SLOTS = ["weekday", "weekend", "flexible"];
const STATUSES = ["new", "contacted", "consulting", "qualified", "enrolled", "not_interested", "unreachable"];
const GRADES = Array.from({ length: 12 }, (_, index) => `Lớp ${index + 1}`);

const cleanText = (max) => z.string().trim().min(2).max(max);

const leadInputSchema = z.object({
  parentName: cleanText(120),
  phone: z.string().trim().min(9).max(18),
  studentName: cleanText(120),
  grade: z.enum(GRADES),
  activities: z.array(z.enum(ACTIVITIES)).min(1).max(ACTIVITIES.length),
  timeSlots: z.array(z.enum(TIME_SLOTS)).min(1).max(TIME_SLOTS.length),
  consent: z.literal(true),
  locale: z.enum(["vi", "en"]).default("vi")
}).strict();

const adminPatchSchema = z.object({
  parent_name: cleanText(120).optional(),
  phone_raw: z.string().trim().min(9).max(18).optional(),
  student_name: cleanText(120).optional(),
  grade: z.enum(GRADES).optional(),
  activities: z.array(z.enum(ACTIVITIES)).min(1).max(ACTIVITIES.length).optional(),
  time_slots: z.array(z.enum(TIME_SLOTS)).min(1).max(TIME_SLOTS.length).optional(),
  status: z.enum(STATUSES).optional(),
  notes: z.string().trim().max(5000).optional(),
  assigned_to: z.string().trim().max(120).optional(),
  next_follow_up_at: z.string().datetime({ offset: true }).nullable().optional()
}).strict();

function normalizePhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("84") && digits.length >= 11) digits = `0${digits.slice(2)}`;
  if (!/^0\d{9,10}$/.test(digits)) throw new Error("invalid_phone");
  return digits;
}

function normalizeLeadInput(input) {
  const parsed = leadInputSchema.parse(input);
  return {
    parent_name: parsed.parentName.replace(/\s+/g, " "),
    phone_raw: parsed.phone,
    phone_normalized: normalizePhone(parsed.phone),
    student_name: parsed.studentName.replace(/\s+/g, " "),
    grade: parsed.grade,
    activities: [...new Set(parsed.activities)].sort(),
    time_slots: [...new Set(parsed.timeSlots)].sort(),
    locale: parsed.locale
  };
}

function createReference(now = new Date()) {
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now).replaceAll("-", "");
  const suffix = randomBytes(3).toString("base64url").slice(0, 4).toUpperCase();
  return `SNA-${date}-${suffix}`;
}

function sanitizeSearch(value) {
  return String(value || "").trim().slice(0, 100).replace(/[,%()]/g, " ").replace(/\s+/g, " ");
}

module.exports = {
  ACTIVITIES,
  TIME_SLOTS,
  STATUSES,
  GRADES,
  leadInputSchema,
  adminPatchSchema,
  normalizePhone,
  normalizeLeadInput,
  createReference,
  sanitizeSearch
};
