"""Generates database/seed_pages.sql. Edit course content here, then run:
   python3 database/tools/build_seed_pages.py
(Once the admin panel exists, content can be edited there instead.)"""
import json, pathlib

def q(s):  # SQL string literal
    return "'" + str(s).replace("'", "''") + "'"
def j(v):
    return q(json.dumps(v, ensure_ascii=False)) + "::jsonb"

COMMON_FAQS = [
    ("Is accommodation available?", "We can guide outstation students to nearby hostels and shared rooms around Ambattur. Ask our counsellor for current options and costs."),
    ("Do you provide placement assistance?", "Yes. We help with CV preparation, practical test preparation and connecting you with employers in India and the Gulf. Placement depends on your skill level and test results."),
]

COURSES = {
 "tig-welding": dict(
   tagline="Precision Welding Skills for a Better Tomorrow",
   overview="TIG (Tungsten Inert Gas) welding is a high-precision welding process used for high-quality welds on stainless steel, aluminium and other non-ferrous metals. This course is designed to give you complete practical and theoretical knowledge to become a skilled TIG welder, ready for industrial and international opportunities.",
   learn=["TIG welding fundamentals","TIG machine setup & operation","Tungsten electrode preparation","Current and gas flow selection","Welding on stainless steel","Welding on aluminium","Pipe and pipe-to-plate welding","Welding positions (1G to 6G)","Weld defect identification & prevention","Welding symbols (basic)","Safety and PPE","Practical tips from industry experts"],
   modules=[("Basics & Safety",["Process introduction","Tools & equipment","Safety practices"]),
            ("Machine Setup",["Machine settings","Tungsten & filler rods","Gas flow & shielding"]),
            ("Practical Welding",["Flat, horizontal, vertical","Pipe welding","Hands-on practice"]),
            ("Advanced Techniques",["Stainless steel & aluminium","Defect control","Industry standards"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="10th Pass / ITI / Diploma / Any interested candidate",
   material="Mild Steel, Stainless Steel, Aluminium",
   equipment="Industry standard TIG welding machines and accessories",
   careers=["TIG Welder (Industrial / Fabrication)","Stainless Steel Welder","Aluminium Welder","Pipe Welder (TIG)","Welding Technician","Welding Supervisor (with experience)","Opportunities in India, Gulf & Overseas"],
   faqs=[("What is the eligibility for the TIG welding course?","10th pass, ITI, diploma holders or anyone interested in welding can join. No previous welding experience is needed."),
         ("Can beginners join this course?","Yes. The course starts with basics and safety before moving to machine setup and practical welding."),
         ("Do you provide practical training?","Yes. About 80% of the course is hands-on practice in our workshop, with individual practice time on the machines."),
         ("Will I get a certificate after the course?","You receive a course completion certificate after passing the practical and theory assessment. Code-based welder qualification can be arranged separately."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("How is TIG different from MIG welding?","TIG uses a non-consumable tungsten electrode and a separate filler rod, giving very clean, precise welds. MIG feeds wire continuously and is faster for fabrication work."),
         ("What are the job opportunities after this course?","TIG welders work in stainless steel fabrication, pharma and food plants, pipelines, power plants and oil & gas, in India and abroad.")],
   gallery=["TIG Welding Practice","Stainless Steel Welding","Pipe Welding Setup","Student Practice","Trainer Guidance"],
 ),
 "mig-welding": dict(
   tagline="Fast, Productive Welding for Modern Fabrication",
   overview="MIG/MAG (Gas Metal Arc) welding feeds a continuous wire through the torch, making it the fastest and most productive process for fabrication, manufacturing and structural work. This course builds the machine control and consistency employers look for on production lines and fabrication shops.",
   learn=["MIG/MAG process fundamentals","Wire feeder and machine setup","Voltage, wire speed and gas selection","Short-circuit and spray transfer","Fillet and butt welds on plate","Welding positions (1G to 4G)","Flux-cored wire basics","Weld defect identification & prevention","Joint preparation and fit-up","Welding symbols (basic)","Safety and PPE","Production welding tips"],
   modules=[("Basics & Safety",["Process introduction","Wire and gas types","Safety practices"]),
            ("Machine Setup",["Voltage and wire speed","Gas flow","Torch maintenance"]),
            ("Practical Welding",["Fillet welds","Butt welds","Position practice"]),
            ("Advanced Techniques",["Spray transfer","Flux-cored welding","Defect control"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="10th Pass / ITI / Diploma / Any interested candidate",
   material="Mild Steel, Carbon Steel",
   equipment="Industrial MIG/MAG machines with wire feeders",
   careers=["MIG/MAG Welder","Fabrication Welder","Production Line Welder","Structural Welder","Welding Technician","Opportunities in India, Gulf & Overseas"],
   faqs=[("What is the eligibility for the MIG welding course?","10th pass, ITI, diploma holders or anyone interested can join. No experience needed."),
         ("Is MIG welding easy for beginners?","MIG is one of the easier processes to start with because the wire feeds automatically, letting you focus on travel speed and angle."),
         ("Do you provide practical training?","Yes. Most of the course is hands-on workshop practice."),
         ("Will I get a certificate after the course?","Yes, a course completion certificate after passing the assessment."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("What is the difference between MIG and MAG?","Both use the same equipment. MIG uses an inert gas like argon; MAG uses an active gas mix with CO₂, which is common for steel."),
         ("Where do MIG welders work?","Automotive plants, fabrication shops, structural steel, shipbuilding and heavy engineering.")],
   gallery=["MIG Welding Practice","Fillet Weld Training","Fabrication Work","Student Practice","Trainer Guidance"],
 ),
 "arc-welding": dict(
   tagline="The Foundation Every Welder Needs",
   overview="ARC (Shielded Metal Arc / SMAW) welding is the most widely used welding process on construction sites, pipelines and repair work. It is the best starting point for new welders, teaching arc control, puddle reading and electrode handling that carry over to every other process.",
   learn=["ARC welding fundamentals","Machine setup and polarity","Electrode types and selection","Striking and maintaining the arc","Stringer and weave beads","Fillet and butt joints","Welding positions (1G to 4G)","Weld defect identification & prevention","Electrode storage and baking","Welding symbols (basic)","Safety and PPE","Site welding practices"],
   modules=[("Basics & Safety",["Process introduction","Electrodes","Safety practices"]),
            ("Machine Setup",["Current settings","Polarity","Electrode handling"]),
            ("Practical Welding",["Bead practice","Fillet and butt joints","Position practice"]),
            ("Advanced Techniques",["Vertical and overhead","Defect control","Pipe introduction"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="8th / 10th Pass / ITI / Any interested candidate",
   material="Mild Steel, Carbon Steel",
   equipment="Industrial SMAW machines, electrode ovens",
   careers=["ARC Welder","Construction Site Welder","Maintenance Welder","Pipeline Helper / Welder","Fabricator","Opportunities in India, Gulf & Overseas"],
   faqs=[("What is the eligibility for the ARC welding course?","Anyone interested can join. The course starts from the basics."),
         ("Is ARC welding good for beginners?","Yes. It is usually the first process we teach because the skills carry over to TIG and MIG."),
         ("Do you provide practical training?","Yes. Most of the course is hands-on workshop practice."),
         ("Will I get a certificate after the course?","Yes, a course completion certificate after passing the assessment."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("What should I learn after ARC welding?","Most students continue to TIG welding and then 3G/6G position welding for better job opportunities."),
         ("Where do ARC welders work?","Construction, structural steel, pipelines, shipyards and plant maintenance.")],
   gallery=["ARC Welding Practice","Electrode Handling","Position Welding","Student Practice","Trainer Guidance"],
 ),
 "6g-pipe-welding": dict(
   tagline="The Benchmark Qualification for Pipe Welders",
   overview="6G is the most demanding welding position: the pipe is fixed at 45° and you must weld all the way around it, covering flat, vertical and overhead in one joint. Passing a 6G test usually qualifies a welder for all positions, which is why oil & gas, power and Gulf employers ask for it.",
   learn=["Pipe joint preparation and bevelling","Fit-up and tack welding","TIG root pass technique","ARC fill and cap passes","5G and 6G positions","Heat input control","Reading a WPS","Visual inspection criteria","Common pipe weld defects","Radiography test basics","Safety and PPE","Qualification test preparation"],
   modules=[("Pipe Basics & Safety",["Pipe materials","Bevel preparation","Safety practices"]),
            ("Fit-up & Root",["Tack welding","TIG root pass","Root inspection"]),
            ("Fill & Cap",["Hot pass","ARC fill passes","Cap pass"]),
            ("6G Position Practice",["5G practice","6G practice","Defect control"]),
            ("Assessment & Qualification",["Mock test","Visual/bend test","Qualification support"])],
   eligibility="Basic ARC or TIG welding skills recommended",
   material="Carbon Steel pipe, Stainless Steel pipe",
   equipment="TIG and SMAW machines, 6G pipe rigs, bevelling tools",
   duration_detail="2 – 3 Months (depends on prior skill)",
   careers=["6G Pipe Welder","Pipeline Welder","Oil & Gas Welder","Power Plant Welder","Pressure Vessel Welder","Welding Supervisor (with experience)","Opportunities in India, Gulf & Overseas"],
   faqs=[("Can a beginner join the 6G course?","We recommend basic ARC or TIG skills first. Beginners can take a combined path starting with ARC and TIG basics."),
         ("How long does it take to pass 6G?","Most students with basic skills need 2 to 3 months of regular practice. It depends on your practice time and consistency."),
         ("Do you provide practical training?","Yes. You practise on fixed pipe rigs in 5G and 6G positions."),
         ("Will I get a certificate?","You receive a course completion certificate. Code-based welder qualification (e.g. ASME IX) can be arranged as a separate test."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("Which process is used in 6G tests?","Commonly a TIG root with ARC fill and cap, but it depends on the employer's WPS."),
         ("Why is 6G in demand in the Gulf?","Oil & gas, petrochemical and power projects need welders qualified for all positions on pipe.")],
   gallery=["6G Pipe Setup","Root Pass Practice","Pipe Fit-up","Student Practice","Trainer Guidance"],
 ),
 "structural-welding": dict(
   tagline="Welding Skills for Steel Structures and Heavy Fabrication",
   overview="Structural welding covers the beams, columns, plates and frames used in buildings, bridges, sheds and heavy fabrication. This course focuses on strong fillet and groove welds, fit-up and reading drawings, following structural codes such as AWS D1.1.",
   learn=["Structural steel basics","Reading fabrication drawings","Joint fit-up and tacking","Fillet and groove welds","Multi-pass welding","Welding positions (1G to 4G)","Distortion control","Weld defect identification & prevention","Introduction to AWS D1.1","Welding symbols","Safety at height and on site","Fabrication shop practices"],
   modules=[("Basics & Safety",["Structural steel","Drawings","Safety practices"]),
            ("Fit-up",["Measuring and marking","Tack welding","Distortion control"]),
            ("Practical Welding",["Fillet welds","Groove welds","Multi-pass"]),
            ("Position Welding",["3G vertical","4G overhead","Defect control"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="10th Pass / ITI / Basic welding knowledge helpful",
   material="Mild Steel plates, sections and beams",
   equipment="SMAW and MIG/MAG machines, fabrication tools",
   careers=["Structural Welder","Fabrication Welder","Steel Erection Welder","Fitter-Welder","Welding Supervisor (with experience)","Opportunities in India, Gulf & Overseas"],
   faqs=[("What is the eligibility for structural welding?","10th pass or ITI candidates can join. Basic welding knowledge helps but is not required."),
         ("Which processes are used?","Mainly ARC (SMAW) and MIG/MAG, the processes used in structural fabrication."),
         ("Do you provide practical training?","Yes, on plates and sections in all main positions."),
         ("Will I get a certificate?","Yes, a course completion certificate after passing the assessment."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("What is 3G and 4G?","3G is vertical and 4G is overhead welding on plate. They are the positions most asked for in structural tests."),
         ("Where do structural welders work?","Construction, bridges, industrial sheds, shipyards and heavy engineering companies.")],
   gallery=["Structural Welding","Beam Fabrication","Fit-up Practice","Student Practice","Trainer Guidance"],
 ),
 "stainless-steel-welding": dict(
   tagline="Clean, Corrosion-Resistant Welds for Critical Industries",
   overview="Stainless steel is used in pharma, food, chemical and oil & gas plants where weld quality and cleanliness matter. This course teaches the heat control, purging and contamination prevention needed to make sound stainless steel welds, mainly with TIG.",
   learn=["Stainless steel grades and properties","TIG setup for stainless steel","Back purging","Heat input and distortion control","Contamination prevention","Plate and pipe welding","Welding positions","Weld colour and quality","Weld defect identification & prevention","Cleaning and passivation basics","Safety and fume control","Industry quality standards"],
   modules=[("Material & Safety",["Stainless grades","Fume safety","Tools"]),
            ("TIG Setup",["Machine settings","Filler selection","Gas and purge"]),
            ("Practical Welding",["Plate welding","Pipe welding","Heat control"]),
            ("Advanced Techniques",["Thin sheet","Purging","Defect control"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="Basic TIG welding knowledge recommended",
   material="Stainless Steel (304, 316), Duplex introduction",
   equipment="TIG machines, purge equipment, stainless tooling",
   careers=["Stainless Steel Welder","Pharma / Food Plant Welder","Piping Welder","TIG Welder","Welding Supervisor (with experience)","Opportunities in India, Gulf & Overseas"],
   faqs=[("Do I need TIG experience?","Basic TIG knowledge is recommended. Beginners can start with our TIG course first."),
         ("Why is stainless steel welding different?","Stainless is sensitive to heat and contamination, so it needs careful heat control and gas shielding, including back purging on pipe."),
         ("Do you provide practical training?","Yes, on stainless plate and pipe."),
         ("Will I get a certificate?","Yes, a course completion certificate after passing the assessment."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("What is back purging?","Filling the inside of a pipe with argon so the root of the weld does not oxidise."),
         ("Which industries hire stainless welders?","Pharma, food processing, chemical, dairy, oil & gas and power plants.")],
   gallery=["Stainless Steel Welding","Purging Setup","Pipe Welding","Student Practice","Trainer Guidance"],
 ),
 "fitter-training": dict(
   tagline="Measure, Mark, Cut and Fit Like a Professional",
   overview="Fitters prepare and assemble components before welding: reading drawings, marking, cutting, bevelling and fitting pipes and structures. Good fitters are always in demand because accurate fit-up is what makes quality welds possible.",
   learn=["Reading isometric and fabrication drawings","Measuring and marking","Gas cutting and grinding","Pipe bevelling","Pipe and flange fit-up","Structural fit-up","Tack welding basics","Using levels, squares and gauges","Tolerances and quality checks","Material handling","Safety and PPE","Site fitting practices"],
   modules=[("Basics & Safety",["Tools","Materials","Safety practices"]),
            ("Drawings",["Isometrics","Fabrication drawings","Bill of materials"]),
            ("Cutting & Preparation",["Gas cutting","Grinding","Bevelling"]),
            ("Fit-up Practice",["Pipe fit-up","Structural fit-up","Tack welding"]),
            ("Assessment & Certification",["Theory test","Practical test","Certification support"])],
   eligibility="10th Pass / ITI Fitter / Any interested candidate",
   material="Carbon Steel pipes, plates and sections",
   equipment="Gas cutting sets, grinders, measuring tools",
   careers=["Pipe Fitter","Structural Fitter","Fabrication Fitter","Fitter-Welder","Opportunities in India, Gulf & Overseas"],
   faqs=[("Who can join fitter training?","10th pass, ITI fitter or anyone interested in fabrication."),
         ("Is welding included?","Tack welding basics are included. Full welding skills are covered in our welding courses."),
         ("Do you provide practical training?","Yes, on pipes and structures."),
         ("Will I get a certificate?","Yes, a course completion certificate after passing the assessment."),
         COMMON_FAQS[0], COMMON_FAQS[1],
         ("Can I combine fitter and welder training?","Yes. A combined fitter-welder path is popular for Gulf jobs."),
         ("Where do pipe fitters work?","Oil & gas, petrochemical, power plants, shipyards and construction projects.")],
   gallery=["Pipe Fit-up","Drawing Reading","Gas Cutting","Student Practice","Trainer Guidance"],
 ),
}

EXTRA = {'tig-welding': {'intro': 'Learn TIG welding with hands-on training on industry-standard machines. Build the precision, control and confidence to weld stainless steel, aluminium and pipe to industrial quality.', 'industries': ['oil-gas', 'petrochemical', 'power', 'heavy-engineering', 'construction', 'fabrication', 'shipbuilding', 'automotive', 'manufacturing', 'food-pharma'], 'related': ['mig-welding', '6g-pipe-welding', 'stainless-steel-welding']}, 'mig-welding': {'intro': 'Learn MIG/MAG welding the way production shops use it. Master machine setup, wire and gas selection and consistent, fast welds for fabrication and manufacturing jobs.', 'industries': ['automotive', 'manufacturing', 'fabrication', 'construction', 'shipbuilding', 'heavy-engineering', 'power', 'infrastructure'], 'related': ['arc-welding', 'structural-welding', 'tig-welding']}, 'arc-welding': {'intro': 'Start your welding career with ARC (SMAW) welding. Learn arc control, electrode handling and strong, reliable joints that every construction site and fabrication shop needs.', 'industries': ['construction', 'infrastructure', 'fabrication', 'shipbuilding', 'power', 'oil-gas', 'heavy-engineering', 'maintenance'], 'related': ['tig-welding', 'structural-welding', '6g-pipe-welding']}, '6g-pipe-welding': {'intro': 'Train for the all-position pipe test employers ask for. Practise TIG root and ARC fill and cap passes on fixed 45° pipe until you are ready for your qualification test.', 'industries': ['oil-gas', 'petrochemical', 'power', 'offshore', 'shipbuilding', 'heavy-engineering', 'construction', 'fabrication'], 'related': ['tig-welding', 'arc-welding', 'stainless-steel-welding']}, 'structural-welding': {'intro': 'Learn to weld beams, columns and plates for buildings, bridges and heavy fabrication. Build strong fillet and groove welds in vertical and overhead positions.', 'industries': ['construction', 'infrastructure', 'fabrication', 'heavy-engineering', 'shipbuilding', 'power', 'manufacturing', 'oil-gas'], 'related': ['arc-welding', 'mig-welding', 'fitter-training']}, 'stainless-steel-welding': {'intro': 'Specialise in clean, corrosion-resistant stainless steel welds. Learn heat control, back purging and contamination prevention for pharma, food, chemical and oil & gas plants.', 'industries': ['food-pharma', 'petrochemical', 'oil-gas', 'power', 'dairy', 'fabrication', 'heavy-engineering', 'manufacturing'], 'related': ['tig-welding', '6g-pipe-welding', 'mig-welding']}, 'fitter-training': {'intro': 'Learn to read drawings, measure, mark, cut, bevel and fit pipes and structures accurately. Good fit-up is what makes quality welds possible, and skilled fitters are always in demand.', 'industries': ['oil-gas', 'petrochemical', 'power', 'shipbuilding', 'construction', 'infrastructure', 'fabrication', 'heavy-engineering'], 'related': ['structural-welding', '6g-pipe-welding', 'arc-welding']}}

out = ["-- GENERATED by database/tools/build_seed_pages.py -- safe to re-run",
       "INSERT INTO courses (slug,title,short_desc,icon,duration,level,show_on_home,sort_order) VALUES",
       " ('fitter-training','Fitter Training','Pipe and structural fitting: drawings, marking, cutting and fit-up.','ruler','1.5 Months','Beginner',FALSE,7)",
       "ON CONFLICT (slug) DO NOTHING;", ""]
for slug, c in COURSES.items():
    details = [
        {"label": "Eligibility", "value": c["eligibility"]},
        {"label": "Duration", "value": c.get("duration_detail", "See course duration (custom duration available for corporate)")},
        {"label": "Training Method", "value": "Theory + Practical (80% Practical)"},
        {"label": "Work Material", "value": c["material"]},
        {"label": "Equipment Used", "value": c["equipment"]},
        {"label": "Certification", "value": "Course completion certificate (as applicable)"},
    ]
    out.append(f"""UPDATE courses SET
  tagline={q(c['tagline'])}, overview={q(c['overview'])},
  learn_points={j(c['learn'])},
  modules={j([{'title': t, 'points': p} for t, p in c['modules']])},
  details={j(details)},
  careers={j(c['careers'])},
  faqs={j([{'q': a, 'a': b} for a, b in c['faqs']])},
  gallery={j([{'title': g, 'image_url': None} for g in c['gallery']])}
WHERE slug={q(slug)} AND overview IS NULL;
""")
# Duration detail for non-6G courses uses the course's own duration column
# v3.1 fields: filled separately so existing databases get them too
for slug, x in EXTRA.items():
    out.append(f"UPDATE courses SET intro={q(x['intro'])}, industries={j(x['industries'])}, related_slugs={j(x['related'])} WHERE slug={q(slug)} AND intro IS NULL;")
# 6G takes longer than the other courses; keep the card, info box and table consistent
out.append("UPDATE courses SET duration = '2 – 3 Months' WHERE slug = '6g-pipe-welding' AND duration = '2 Months';")
out.append("")
out.append("UPDATE courses SET details = jsonb_set(details, '{1,value}', to_jsonb(duration || ' (custom duration available for corporate)')) WHERE details->1->>'value' LIKE 'See course duration%';\n")

out.append("""-- Facilities (replaces the 4 sample rows from v2)
-- On first upgrade only: clear the old sample rows
DELETE FROM facilities WHERE NOT EXISTS (SELECT 1 FROM facilities WHERE title = 'Welding Workshop');
INSERT INTO facilities (title, caption, sort_order)
SELECT * FROM (VALUES
 ('Welding Workshop','Individual booths so every student gets real arc time',1),
 ('Classroom','Theory, welding symbols and WPS reading',2),
 ('Modern Equipment','Industrial TIG, MIG and ARC machines',3),
 ('6G Pipe Setup','Fixed-position pipe rigs for 5G and 6G practice',4),
 ('Testing & Inspection','Visual inspection, bend tests and NDT demonstrations',5)
) v WHERE NOT EXISTS (SELECT 1 FROM facilities WHERE title = 'Welding Workshop');

-- SAMPLE testimonials from the design mockup. Replace with genuine student reviews before going live.
INSERT INTO testimonials (name, course, quote, rating, sort_order)
SELECT * FROM (VALUES
 ('K. Prakash','TIG Welding Course','Excellent practical training with individual attention. Now I am working in Dubai as a TIG welder.',5,1),
 ('M. Aravind','6G Pipe Welding Course','Best institute for 6G pipe welding training. Supportive trainers and a great workshop.',5,2),
 ('S. Hari','Welding Supervisor Course','NIW helped me build my career. Now I am working as a welding supervisor in India.',5,3),
 ('R. Karthik','MIG Welding Course','Good facilities, real-time practice and placement support is awesome.',5,4)
) v WHERE NOT EXISTS (SELECT 1 FROM testimonials);

-- SAMPLE employer names from the design mockup. List only companies that have actually hired NIW students.
INSERT INTO recruiters (name, sort_order) VALUES
 ('Larsen & Toubro',1),('Tata',2),('Reliance Industries',3),('Adani',4),
 ('Shapoorji Pallonji',5),('TechnipFMC',6),('BHEL',7),('NPCC',8)
ON CONFLICT (name) DO NOTHING;

-- Homepage FAQs
INSERT INTO faqs (question, answer, sort_order, scope)
SELECT * FROM (VALUES
 ('What is the eligibility for welding courses?','Most courses are open to 10th pass, ITI and diploma candidates, and to anyone interested in welding. Advanced courses like 6G need basic welding skills.',1,'home'),
 ('Do you provide practical training?','Yes. About 80% of training time is hands-on practice in our workshop, with individual time on industrial machines.',2,'home'),
 ('Do you provide certification after course completion?','Yes. You receive a course completion certificate after passing the assessment. Code-based welder qualification can be arranged separately.',3,'home'),
 ('Is accommodation available?','We guide outstation students to nearby hostels and shared rooms around Ambattur. Ask our counsellor for current options.',4,'home'),
 ('Do you provide placement assistance?','Yes. We help with CV preparation, practical test preparation and connecting students with employers in India and the Gulf.',5,'home'),
 ('How can I join the course?','Send an enquiry, call or WhatsApp us. We will explain the course, fees and next batch date, and you can visit the institute before joining.',6,'home')
) v WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE scope = 'home');
""")
pathlib.Path(__file__).resolve().parents[1].joinpath("seed_pages.sql").write_text("\n".join(out), encoding="utf-8")
print("wrote seed_pages.sql")
