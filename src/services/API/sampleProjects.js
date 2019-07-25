const descriptions = [
  "Every day girls around the world are fighting for their freedom. This International Day of the Girl - join them and raise your voice.",
  "The second annual Goalkeepers will take place the 25-26th of September, at Jazz at Lincoln Center in New York City, as world leaders gather for the UN General Assembly. The Global Goals Awards ceremony will be held on the evening of the 25th, followed by a daytime event on the 26th.",
  "Infrastructure is one of Australia’s largest employers and is responsible for half of the country’s greenhouse gas emissions, the opportunity this industry can have on delivering Australia’s commitment to the SDGs is significant. V2.0 of the IS rating tool is mandated by almost all transport agencies and provides the framework for those projects to achieving the Sustainable Development Goals.",
  "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
  "Achieve gender equality and empower all women and girls.",
  "Ensure availability and sustainable management of water and sanitation for all.",
  "Ensure access to affordable, reliable, sustainable and modern energy for all",
  "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
  "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
  "Reduce inequality within and among countries.",
  "Make cities and human settlements inclusive, safe, resilient and sustainable.",
  "Ensure sustainable consumption and production patterns.",
  "Take urgent action to combat climate change and its impacts.",
  "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
  "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
  "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
  "Strengthen the means of implementation and revitalize the global partnership for sustainable development."
];

const organisations = [
  "Vodacom Tanzania",
  "Sikika",
  "B.W. Mkapa Foundation",
  "The Mwalimu Stage",
  "Wildlife Tanzania",
  "Acquafina Star",
  "Belarus Embassy",
  "The African Aid",
  "WWF Africa"
];

const projects = [
  "Freedom For Girls",
  "The boogie bulk buy",
  "My Green Butler",
  "Start Smart Financial Aid",
  "Clean energy for rural areas",
  "Financial Inclusion Action Plan",
  "Tropical Sustainable Design",
  "Weaving right out of poverty",
  "EasyLearn Child Fund"
];

const images = [
  "https://ik.imagekit.io/ryozgj42m/tr:w-1280,q-75,pr-true/efe6be9fdac92063e7672df6e6baf0b040c0eeb8_dayofthegirl.jpg",
  "https://ik.imagekit.io/ryozgj42m/tr:w-396,q-75,pr-true/4071aee9dd399fbb30bac6cb96c871187980c595_gettyimages-120631588.jpg",
  "https://ik.imagekit.io/ryozgj42m/tr:w-396,q-75,pr-true/4ab8d1e5dcb59ac1b248a4f68897dbc22d9ed39c_forestbridge.jpg",
  "https://ik.imagekit.io/ryozgj42m/tr:w-396,q-75,pr-true/da1bf309cd2a43dd35e2f672fd8e9cf90b92dadd_leave-no.jpg",
  "https://sdgs.org.au/wp-content/uploads/2018/12/Glencore-Land-rehabilitation-475x317.png",
  "https://sdgs.org.au/wp-content/uploads/2018/05/Womens-2-LR-476x317.jpg",
  "https://sdgs.org.au/wp-content/uploads/2018/05/image-1.jpg",
  "https://sdgs.org.au/wp-content/uploads/2018/06/160916-IDM-khatrithati-0104-e-476x317.jpg",
  "https://sdgs.org.au/wp-content/uploads/2018/05/28283167962_c1187d180b_o_cropped_withPhotoCredit_small-535x317.jpg"
];

const goals = [
  [1, 3, 5, 8],
  [7, 12, 15],
  [5, 9, 13],
  [8],
  [10, 12, 15, 16],
  [1, 9, 11, 14],
  [4, 7],
  [3, 6, 9],
  [10, 13]
];

const colors = [
  "#e4243b", "#d3a029", "#279b48", "#c31f33", "#ef402b", "#00aed9", "#fcc30c", "#8f1838", "#f36d25", "#e11484", "#f99d26", "#cf8d2a", "#48773e", "#007dbc", "#3eb049", "#02558b", "#183668"
];

export default projects.map((name, index) => ({
  name,
  description: descriptions[index],
  image: images[index],
  organisation: organisations[index],
  approved: Math.random() >= 0.5,
  goals: goals[index].map(number => ({number, color: colors[number]}))
}));
