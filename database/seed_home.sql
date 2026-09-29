INSERT INTO courses (slug,title,short_desc,icon,duration,level,sort_order) VALUES
 ('tig-welding','TIG Welding','Precision welding for thin materials and critical applications.','torch','2 Months','Beginner / Intermediate',1),
 ('mig-welding','MIG/MAG Welding','High productivity welding for industrial and manufacturing sectors.','wire','1.5 Months','Beginner',2),
 ('arc-welding','ARC Welding','Shielded metal arc welding training for strong and reliable joints.','zap','1 Month','Beginner',3),
 ('6g-pipe-welding','6G Pipe Welding','Advance your skills in 6G pipe welding with certification support.','pipe','2 Months','Intermediate',4),
 ('structural-welding','Structural Welding','Welding training for structural steel and heavy fabrication.','beam','1.5 Months','Intermediate',5),
 ('stainless-steel-welding','Stainless Steel','Specialized training for stainless steel and exotic materials.','shield','1.5 Months','Advanced',6)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO site_stats (value,label,sub_label,icon,sort_order)
SELECT * FROM (VALUES
 ('15+','Years','Of Excellence','award',1),
 ('25+','Trainers','Expert Instructors','trainer',2),
 ('5000+','Students','Trained Successfully','students',3),
 ('100+','Companies','Industry Partnerships','factory',4)
) v WHERE NOT EXISTS (SELECT 1 FROM site_stats);

