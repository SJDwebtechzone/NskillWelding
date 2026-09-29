INSERT INTO categories (slug, name, icon, count_type, sort_order) VALUES
 ('welding-basics','Welding Basics','welder','articles',1),
 ('welding-processes','Welding Processes','pipe','articles',2),
 ('welding-quality','Welding Quality','shield','articles',3),
 ('codes-standards','Codes & Standards','book','articles',4),
 ('safety-ppe','Safety & PPE','hardhat','articles',5),
 ('career-industry','Career & Industry','chart','articles',6),
 ('videos-tutorials','Videos & Tutorials','play','videos',7)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO articles (slug,title,excerpt,content,category_id,read_minutes,is_featured,has_video,published_at) VALUES
 ('what-is-welding-complete-guide-for-beginners','What is Welding? A Complete Guide for Beginners',
  'Learn the fundamentals of welding, its importance, types and real-world applications.',
  'Welding joins two metal parts by melting them at the joint and letting them fuse as they cool. It is used in pipelines, bridges, ships, pressure vessels, power plants and almost every fabricated structure.

The most common processes are ARC (SMAW), TIG (GTAW), MIG/MAG (GMAW) and flux-cored welding. Each uses a different heat source and shielding method, which makes it better suited to certain materials, thicknesses and positions.

A beginner usually starts with ARC welding on carbon steel plate, learns to control arc length, travel speed and electrode angle, and then moves on to TIG and MIG before attempting position welding such as 3G and 6G.',
  (SELECT id FROM categories WHERE slug='welding-basics'),5,TRUE,FALSE,'2026-05-10'),
 ('tig-vs-mig-vs-arc-welding','TIG vs MIG vs ARC Welding – Which Process is Right for You?',
  'A detailed comparison to help you understand the strengths, limitations and best applications.',
  'ARC welding (SMAW) is portable, works outdoors and handles dirty or rusty steel well. It is the most common starting point for new welders.

TIG welding (GTAW) gives the cleanest, most precise welds and is the standard for stainless steel, thin sections and critical root passes in pipe welding. It is slower and needs good hand control.

MIG/MAG welding (GMAW) feeds wire continuously, so it is fast and productive on fabrication and structural work. It needs shielding gas, which makes it less suited to windy sites.

For Gulf and oil-and-gas jobs, strong TIG root and ARC fill/cap skills in 6G are the combination employers most often test for.',
  (SELECT id FROM categories WHERE slug='welding-processes'),7,TRUE,FALSE,'2026-05-08'),
 ('understanding-weld-defects-and-prevention','Understanding Weld Defects and How to Prevent Them',
  'Identify common weld defects, their causes and effective prevention techniques.',
  'Common weld defects include porosity, undercut, lack of fusion, incomplete penetration, slag inclusion, cracks and excessive spatter.

Porosity is usually caused by contamination, moisture or poor gas shielding. Undercut comes from too much current or the wrong electrode angle. Lack of fusion is often the result of low heat input or fast travel speed.

Most defects can be prevented by cleaning the joint properly, using dry consumables, setting correct parameters from the WPS and keeping a consistent travel speed and angle.',
  (SELECT id FROM categories WHERE slug='welding-quality'),6,TRUE,FALSE,'2026-05-05'),
 ('importance-of-welding-codes-and-standards','Importance of Welding Codes and Standards in Industry',
  'Why welding codes and standards are critical for safety, quality and compliance.',
  'Welding codes such as ASME Section IX, AWS D1.1 and API 1104 define how welding procedures and welders must be qualified, how welds are inspected and what acceptance criteria apply.

Following a code means a weld made in Chennai can be trusted by a client in Dubai or Houston. It protects lives, avoids costly rework and is a requirement on most industrial projects.',
  (SELECT id FROM categories WHERE slug='codes-standards'),4,TRUE,TRUE,'2026-05-03'),
 ('welding-positions-1g-to-6g-explained','Welding Positions 1G, 2G, 3G, 4G, 5G and 6G Explained',
  'What each welding position means and why 6G is the benchmark qualification.',
  '1G is flat, 2G horizontal, 3G vertical and 4G overhead for plate. For pipe, 5G is a fixed horizontal pipe and 6G is a pipe fixed at 45 degrees, which requires welding in every position around the joint. Passing a 6G test usually qualifies a welder for all positions.',
  (SELECT id FROM categories WHERE slug='welding-basics'),6,FALSE,FALSE,'2026-04-28'),
 ('essential-ppe-for-welders','Essential PPE Every Welder Must Wear',
  'Helmets, gloves, jackets, respirators and boots: what to wear and why.',
  'A welder needs an auto-darkening helmet of the correct shade, flame-resistant clothing, leather gloves, safety boots, ear protection and, in confined spaces or with stainless steel, respiratory protection against fumes.',
  (SELECT id FROM categories WHERE slug='safety-ppe'),4,FALSE,FALSE,'2026-04-22'),
 ('how-to-become-a-6g-welder','How to Become a 6G Welder',
  'The training path from beginner to a qualified 6G pipe welder.',
  'Start with ARC and TIG basics on plate, progress through 2G, 3G and 4G, then move to pipe in 5G and 6G. Plan for regular assessment, visual inspection and bend or radiography tests along the way before attempting a formal qualification test.',
  (SELECT id FROM categories WHERE slug='career-industry'),8,FALSE,FALSE,'2026-04-15')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO resources (title,file_type,size_label,file_url,sort_order)
SELECT * FROM (VALUES
 ('Welding Symbols Guide','PDF','2.4 MB','/files/welding-symbols-guide.pdf',1),
 ('Welding Terminology Glossary','DOC','1.8 MB','/files/welding-terminology-glossary.docx',2),
 ('Welding Inspection Checklist','XLS','1.2 MB','/files/welding-inspection-checklist.xlsx',3),
 ('WPS & PQR Explained','PDF','3.1 MB','/files/wps-pqr-explained.pdf',4)
) v WHERE NOT EXISTS (SELECT 1 FROM resources);

INSERT INTO videos (title,description,youtube_id,duration,category_id,published_at)
SELECT v.title, v.description, v.youtube_id, v.duration, v.category_id, v.published_at::timestamptz FROM (VALUES
 ('TIG Welding Basics – Setup and Techniques','Learn the basic setup and techniques for perfect TIG welding.',NULL::varchar,'08:45',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-09'),
 ('6G Pipe Welding – Tips for Better Performance','Professional tips to improve your 6G pipe welding skills.',NULL,'06:30',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-06'),
 ('Welding Safety – Best Practices Every Welder Must Follow','Essential safety practices to protect yourself on the job.',NULL,'05:12',(SELECT id FROM categories WHERE slug='videos-tutorials'),'2026-05-02')
) v(title,description,youtube_id,duration,category_id,published_at) WHERE NOT EXISTS (SELECT 1 FROM videos);

INSERT INTO faqs (question,answer,sort_order)
SELECT * FROM (VALUES
 ('What is the difference between TIG and MIG welding?','TIG uses a non-consumable tungsten electrode and a separate filler rod, giving precise, clean welds ideal for stainless steel and root passes. MIG feeds a consumable wire continuously, so it is faster and suited to fabrication and structural work.',1),
 ('What is WPS, PQR and WPQR?','A WPS (Welding Procedure Specification) tells the welder how to make a weld. A PQR (Procedure Qualification Record) proves that procedure produces sound welds. A WPQR (Welder Performance Qualification Record) proves an individual welder can follow it.',2),
 ('What are the types of welding positions?','Plate positions are 1G (flat), 2G (horizontal), 3G (vertical) and 4G (overhead). Pipe positions include 5G (fixed horizontal) and 6G (fixed at 45 degrees), which covers all positions.',3),
 ('What are the common welding defects?','Porosity, undercut, lack of fusion, incomplete penetration, slag inclusion, cracks and excessive spatter are the most common. Most are prevented with clean joints, dry consumables and correct parameters.',4),
 ('How can I become a certified welder?','Complete practical training, build skill in the positions you need, then pass a qualification test witnessed to a code such as ASME IX or AWS D1.1. NIW provides training, pre-assessment and qualification support.',5),
 ('Which welding process is best for beginners?','ARC welding (SMAW) is usually the best starting point. It teaches arc control and puddle reading, and the skills carry over to TIG and MIG.',6)
) v WHERE NOT EXISTS (SELECT 1 FROM faqs WHERE scope = 'knowledge');
