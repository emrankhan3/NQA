
const app = Vue.createApp({
  data() {
    return { 
      
      
       searchQuery: '',
      banglaSize: 16,
      arabicSize: 16,
      activeLesson: 1, // Current active lesson
      lessons: [
        {
          id: 1,
          vocabulary: [
            { bangla: 'একটি বই', arabic: 'كِتَابٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি কলম', arabic: 'قَلَمٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি ঘর', arabic: 'بَيْتٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি চেয়ার', arabic: 'كُرْسِيٌّ', showBangla: true, showArabic: true },
            { bangla: 'একটি তালা', arabic: 'قُفْلٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি চাবি', arabic: 'مِفْتَاحٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি বাতি', arabic: 'مِصْبَاحٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি দেয়াল', arabic: 'جِدَارٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি দরজা', arabic: 'بَابٌ', showBangla: true, showArabic: true },
            { bangla: 'এবং', arabic: 'وَ', showBangla: true, showArabic: true },
            { bangla: 'একটি গ্রাম', arabic: 'قَرْيَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি শহর', arabic: 'مَدِينَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি গল্প', arabic: 'قِصَّةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি আয়াত', arabic: 'آيَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি ফল', arabic: 'فَاكِهَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি ফুল', arabic: 'زَهْرَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি আকাশ', arabic: 'سَمَاءٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি জমি/পৃথিবী', arabic: 'أَرْضٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি সময়', arabic: 'وَقْتٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি ঘড়ি (কিয়ামত)', arabic: 'سَاعَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একজন পুরুষ', arabic: 'رَجُلٌ', showBangla: true, showArabic: true },
            { bangla: 'একজন মহিলা', arabic: 'اِمْرَأَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি গাছ', arabic: 'شَجَرَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি পাতা', arabic: 'وَرَقَةٌ', showBangla: true, showArabic: true },
            { bangla: 'আলো', arabic: 'نُورٌ', showBangla: true, showArabic: true },
            { bangla: 'অন্ধকার', arabic: 'ظُلْمَةٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি নদী', arabic: 'نَهْرٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি সমুদ্র', arabic: 'بَحْرٌ', showBangla: true, showArabic: true },
            { bangla: 'একটি কামরা', arabic: 'غُرْفَةٌ', showBangla: true, showArabic: true },
            { bangla: 'বরং', arabic: 'بَلْ', showBangla: true, showArabic: true },
            { bangla: 'কী?', arabic: 'مَا؟', showBangla: true, showArabic: true },
            { bangla: 'কি?', arabic: 'هَلْ؟', showBangla: true, showArabic: true },
            { bangla: 'হ্যাঁ', arabic: 'نَعَمْ', showBangla: true, showArabic: true },
            { bangla: 'না', arabic: 'لَا', showBangla: true, showArabic: true }
          ]

        },
        {
          id: 2,
          vocabulary: [
                          { bangla: 'বড়', arabic: 'كِبِيرٌ - كِبِيرَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'ছোট', arabic: 'صَغِيرٌ - صَغِيرَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'সুন্দর', arabic: 'جَمِيلٌ - جَمِيلَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'ভাল', arabic: 'جَيِّدٌ - جَيِّدَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'নতুন', arabic: 'جَدِيدٌ - جَدِيدَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'পুরোনো', arabic: 'قَدِيمٌ - قَدِيمَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'কেমন?', arabic: 'كَيْفَ؟', showBangla: true, showArabic: true },
                          { bangla: 'সৎ', arabic: 'صَلَاحٌ', showBangla: true, showArabic: true },
                          { bangla: 'জ্ঞানী', arabic: 'أَلِيمٌ', showBangla: true, showArabic: true },
                          { bangla: 'ভদ্র', arabic: 'مُؤَدَّبٌ', showBangla: true, showArabic: true },
                          { bangla: 'শান্তি', arabic: 'عِذَابٌ', showBangla: true, showArabic: true },
                          { bangla: 'কর্ম/আমল', arabic: 'عَمَلٌ', showBangla: true, showArabic: true },
                          { bangla: 'ছাত্র', arabic: 'تِلْمِيذٌ', showBangla: true, showArabic: true },
                          { bangla: 'ছাত্রী', arabic: 'تِلْمِيذَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'শিক্ষক', arabic: 'مُعَلِّمٌ', showBangla: true, showArabic: true },
                          { bangla: 'শিক্ষিকা', arabic: 'مُعَلِّمَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'প্রশিক্ষণ', arabic: 'وَاسِعٌ', showBangla: true, showArabic: true },
                          { bangla: 'সংকীর্ণ', arabic: 'ضَيِّقٌ', showBangla: true, showArabic: true },
                          { bangla: 'লম্বা', arabic: 'طَوِيلٌ', showBangla: true, showArabic: true },
                          { bangla: 'খাটো', arabic: 'قَصِيرٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি টেবিল', arabic: 'فَرْشَةٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি বাগান', arabic: 'حَدِيقَةٌ - جَنَّةٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি জামা', arabic: 'قَمِيصٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি পায়জামা', arabic: 'لِبَاسٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি বাজার', arabic: 'سُوقٌ', showBangla: true, showArabic: true },
                          { bangla: 'একটি রাস্তা', arabic: 'طَرِيقٌ', showBangla: true, showArabic: true }
                        ]

        },
        {
          id: 3,
          vocabulary: [
                      { bangla: 'একজন ছাত্র', arabic: 'تِلْمِيذٌ', showBangla: true, showArabic: true },
                      { bangla: 'একজন ছাত্রী', arabic: 'تِلْمِيذَةٌ', showBangla: true, showArabic: true },
                      { bangla: 'একজন শিক্ষক', arabic: 'مُعَلِّمٌ', showBangla: true, showArabic: true },
                      { bangla: 'একজন শিক্ষিকা', arabic: 'مُعَلِّمَةٌ', showBangla: true, showArabic: true },
                      { bangla: 'একজন ব্যবসায়ী', arabic: 'تَاجِرٌ - تَاجِرَةٌ', showBangla: true, showArabic: true },
                      { bangla: 'একটি শিশু', arabic: 'طِفْلٌ - طِفْلَةٌ', showBangla: true, showArabic: true },
                      { bangla: 'ধনী', arabic: 'غَنِيٌّ - غَنِيَّةٌ', showBangla: true, showArabic: true },
                      { bangla: 'গরিব', arabic: 'فَقِيرٌ - فَقِيرَةٌ', showBangla: true, showArabic: true },
                      { bangla: 'মেধাবী', arabic: 'ذَكِيٌّ - ذَكِيَّةٌ', showBangla: true, showArabic: true },
                      { bangla: 'অবিবেচক', arabic: 'غَبِيٌّ - غَبِيَّةٌ', showBangla: true, showArabic: true },
                      { bangla: 'পরিশ্রমী', arabic: 'مُجْتَهِدٌ', showBangla: true, showArabic: true },
                      { bangla: 'উপকারী', arabic: 'مُفِيدٌ', showBangla: true, showArabic: true },
                      { bangla: 'সুস্থ', arabic: 'صَحِيحٌ', showBangla: true, showArabic: true },
                      { bangla: 'অসুস্থ', arabic: 'مَرِيضٌ', showBangla: true, showArabic: true },
                      { bangla: 'বন্ধ', arabic: 'مُغْلَقٌ', showBangla: true, showArabic: true },
                      { bangla: 'খোলা', arabic: 'مَفْتُوحٌ', showBangla: true, showArabic: true },
                      { bangla: 'দুর্বল', arabic: 'ضَعِيفٌ', showBangla: true, showArabic: true },
                      { bangla: 'শক্তিশালী/মজবুত', arabic: 'قَوِيٌّ', showBangla: true, showArabic: true },
                      { bangla: 'কি?', arabic: 'مَاذَا؟', showBangla: true, showArabic: true },
                      { bangla: 'প্রসিদ্ধ', arabic: 'مَشْهُورٌ', showBangla: true, showArabic: true }
                    ]

        },
        {
          id: 4,
          vocabulary: [
{ bangla: 'বাবা', arabic: 'أَبٌ', showBangla: true, showArabic: true },
{ bangla: 'মা', arabic: 'أُمٌّ', showBangla: true, showArabic: true },
{ bangla: 'ভাই', arabic: 'أَخٌ', showBangla: true, showArabic: true },
{ bangla: 'বোন', arabic: 'أُخْتٌ', showBangla: true, showArabic: true },
{ bangla: 'মামা', arabic: 'خَالٌ', showBangla: true, showArabic: true },
{ bangla: 'খালা', arabic: 'خَالَةٌ', showBangla: true, showArabic: true },
{ bangla: 'চাচা', arabic: 'عَمٌّ', showBangla: true, showArabic: true },
{ bangla: 'ফুপু', arabic: 'عَمَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'দাদা/নানা', arabic: 'جَدٌّ', showBangla: true, showArabic: true },
{ bangla: 'দাদী/নানী', arabic: 'جَدَّةٌ', showBangla: true, showArabic: true }
]            },
{
id: 5,vocabulary: [
{ bangla: 'বন্ধু', arabic: 'صَدِيقٌ', showBangla: true, showArabic: true },
{ bangla: 'বান্ধবী', arabic: 'صَدِيقَةٌ', showBangla: true, showArabic: true },
{ bangla: 'স্বামী', arabic: 'زَوْجٌ', showBangla: true, showArabic: true },
{ bangla: 'স্ত্রী', arabic: 'زَوْجَةٌ', showBangla: true, showArabic: true },
{ bangla: 'নাম', arabic: 'اِسْمٌ', showBangla: true, showArabic: true },
{ bangla: 'শত্রু', arabic: 'عَدُوٌّ', showBangla: true, showArabic: true },
{ bangla: 'উদার', arabic: 'سَخِيٌّ', showBangla: true, showArabic: true },
{ bangla: 'কৃপণ', arabic: 'بَخِيلٌ', showBangla: true, showArabic: true },
{ bangla: 'সত্যবাদী', arabic: 'صِدَاقَةٌ', showBangla: true, showArabic: true },
{ bangla: 'মিথ্যাবাদী', arabic: 'كَذِبٌ', showBangla: true, showArabic: true },
{ bangla: 'অন্তর', arabic: 'قَلْبٌ', showBangla: true, showArabic: true },
{ bangla: 'কুকুর', arabic: 'كَلْبٌ', showBangla: true, showArabic: true }
]
},
{
id:6,
vocabulary: [
{ bangla: 'গরু', arabic: 'بَقَرَةٌ', showBangla: true, showArabic: true },
{ bangla: 'দুধ', arabic: 'لَبَنٌ', showBangla: true, showArabic: true },
{ bangla: 'ছাগল', arabic: 'شَاةٌ', showBangla: true, showArabic: true },
{ bangla: 'মেষ', arabic: 'لَحْمٌ', showBangla: true, showArabic: true },
{ bangla: 'নিল', arabic: 'نِيلٌ', showBangla: true, showArabic: true },
{ bangla: 'মধু', arabic: 'عَسَلٌ', showBangla: true, showArabic: true },
{ bangla: 'খাবার', arabic: 'طَعَامٌ', showBangla: true, showArabic: true },
{ bangla: 'সুস্বাদু', arabic: 'لَذِيذٌ', showBangla: true, showArabic: true },
{ bangla: 'খাঁটি', arabic: 'خَالِصٌ', showBangla: true, showArabic: true },
{ bangla: 'পচা', arabic: 'فَسَادٌ', showBangla: true, showArabic: true },
{ bangla: 'বেশি', arabic: 'كَثِيرٌ', showBangla: true, showArabic: true },
{ bangla: 'কম', arabic: 'قَلِيلٌ', showBangla: true, showArabic: true },
{ bangla: 'ঠাণ্ডা', arabic: 'بَارِدٌ', showBangla: true, showArabic: true },
{ bangla: 'গরম', arabic: 'حَارٌّ', showBangla: true, showArabic: true },
{ bangla: 'নম্র', arabic: 'غَضٌّ - غَضَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'সস্তা', arabic: 'رَخِيصٌ', showBangla: true, showArabic: true },
{ bangla: 'অহংকারী', arabic: 'مُتَكَبِّرٌ', showBangla: true, showArabic: true },
{ bangla: 'বিনয়ী', arabic: 'مُتَوَاضِعٌ', showBangla: true, showArabic: true }
]
},
{
id:7,vocabulary: [
{ bangla: 'কাছ', arabic: 'عِنْدَ', showBangla: true, showArabic: true },
{ bangla: 'সাময়িক', arabic: 'أَمَامَ', showBangla: true, showArabic: true },
{ bangla: 'পিছে', arabic: 'خَلْفَ', showBangla: true, showArabic: true },
{ bangla: 'উল্টো', arabic: 'وِرَاءَ - خِلَافٌ', showBangla: true, showArabic: true },
{ bangla: 'উপরে', arabic: 'فَوْقَ', showBangla: true, showArabic: true },
{ bangla: 'নিচে', arabic: 'بِنَاءٌ - بَنْجَرٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি কাক', arabic: 'غُرَابٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি হাতি', arabic: 'فِيلٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি বানর', arabic: 'قِرْدٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি গাধা', arabic: 'حِمَارٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি শিয়াল', arabic: 'ذِئْبٌ', showBangla: true, showArabic: true },
{ bangla: 'কোথায়?', arabic: 'أَيْنَ؟', showBangla: true, showArabic: true },
{ bangla: 'সূর্য', arabic: 'شَمْسٌ', showBangla: true, showArabic: true },
{ bangla: 'চাঁদ', arabic: 'قَمَرٌ', showBangla: true, showArabic: true },
{ bangla: 'তারকা', arabic: 'نَجْمٌ', showBangla: true, showArabic: true },
{ bangla: 'পাহাড়', arabic: 'جَبَلٌ', showBangla: true, showArabic: true },
{ bangla: 'আগুন', arabic: 'نَارٌ', showBangla: true, showArabic: true },
{ bangla: 'বাটি', arabic: 'دِرَاءٌ', showBangla: true, showArabic: true }
]

},
{
id:8,vocabulary: [
{ bangla: 'আঙ্গুর', arabic: 'عِنَبٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি আঙ্গুর', arabic: 'عِنَبَةٌ', showBangla: true, showArabic: true },
{ bangla: 'নারকেল', arabic: 'رُمَّانٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি নারকেল', arabic: 'رُمَّانَةٌ', showBangla: true, showArabic: true },
{ bangla: 'খেজুর', arabic: 'تَمْرٌ / نَخْلٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি খেজুর', arabic: 'تَمْرَةٌ', showBangla: true, showArabic: true },
{ bangla: 'খেজুরগাছ', arabic: 'نَخْلَةٌ', showBangla: true, showArabic: true },
{ bangla: 'মধ্য', arabic: 'فَوْسَطٌ', showBangla: true, showArabic: true },
{ bangla: 'চেহারা', arabic: 'وَجْهٌ', showBangla: true, showArabic: true },
{ bangla: 'মাথা', arabic: 'رَأْسٌ', showBangla: true, showArabic: true },
{ bangla: 'পেট', arabic: 'بَطْنٌ', showBangla: true, showArabic: true },
{ bangla: 'পিঠ', arabic: 'ظَهْرٌ', showBangla: true, showArabic: true },
{ bangla: 'চোখ', arabic: 'عَيْنٌ', showBangla: true, showArabic: true },
{ bangla: 'কান', arabic: 'أُذُنٌ', showBangla: true, showArabic: true },
{ bangla: 'অংশ', arabic: 'جُزْءٌ', showBangla: true, showArabic: true },
{ bangla: 'সওয়াব', arabic: 'أَجْرٌ / ثَوَابٌ', showBangla: true, showArabic: true },
{ bangla: 'হাত', arabic: 'يَدٌ', showBangla: true, showArabic: true },
{ bangla: 'বুক', arabic: 'صَدْرٌ', showBangla: true, showArabic: true },
{ bangla: 'অভিভাবক', arabic: 'وَلِيٌّ', showBangla: true, showArabic: true },
{ bangla: 'সম্পত্তি/ধন-সম্পদ', arabic: 'مَتَاعٌ', showBangla: true, showArabic: true },
{ bangla: 'বসতি', arabic: 'مِلْكٌ', showBangla: true, showArabic: true },
{ bangla: 'খাদেম/পরিচারক', arabic: 'خَادِمٌ', showBangla: true, showArabic: true },
{ bangla: 'ছবি', arabic: 'صُورَةٌ', showBangla: true, showArabic: true },
{ bangla: 'গিলাফ', arabic: 'غِلَافٌ', showBangla: true, showArabic: true }
]

},
{
id:9,vocabulary: [
{ bangla: 'বসতি', arabic: 'مَلْكٌ', showBangla: true, showArabic: true },
{ bangla: 'খাদেম/চাকর', arabic: 'خَادِمٌ', showBangla: true, showArabic: true },
{ bangla: 'ছবি', arabic: 'صُورَةٌ', showBangla: true, showArabic: true },
{ bangla: 'গিলাফ', arabic: 'غِلَافٌ', showBangla: true, showArabic: true },
{ bangla: 'পাটখা', arabic: 'رَفَّاطٌ', showBangla: true, showArabic: true },
{ bangla: 'উঁচু (পুরুষ)', arabic: 'عَالٍ', showBangla: true, showArabic: true },
{ bangla: 'উঁচু (নারী)', arabic: 'عَالِيَةٌ', showBangla: true, showArabic: true }
]

},
{id:10,
vocabulary: [
{ bangla: 'একটি বই', arabic: 'كِتَابٌ', showBangla: true, showArabic: true },
{ bangla: 'বইগুলো', arabic: 'كُتُبٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি ঘর', arabic: 'بَيْتٌ', showBangla: true, showArabic: true },
{ bangla: 'ঘরগুলো', arabic: 'بُيُوتٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি তালা', arabic: 'قُفْلٌ', showBangla: true, showArabic: true },
{ bangla: 'তালাগুলো', arabic: 'أَقْفَالٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি দরজা', arabic: 'بَابٌ', showBangla: true, showArabic: true },
{ bangla: 'দরজাগুলো', arabic: 'أَبْوَابٌ', showBangla: true, showArabic: true },
{ bangla: 'আমল/কর্ম', arabic: 'عَمَلٌ', showBangla: true, showArabic: true },
{ bangla: 'আমলসমূহ', arabic: 'أَعْمَالٌ', showBangla: true, showArabic: true },
{ bangla: 'ছেলেটি', arabic: 'وَلَدٌ', showBangla: true, showArabic: true },
{ bangla: 'ছেলেগুলো', arabic: 'أَوْلَادٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি গাছ', arabic: 'شَجَرَةٌ', showBangla: true, showArabic: true },
{ bangla: 'গাছসমূহ', arabic: 'أَشْجَارٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি নারিকেল', arabic: 'رُمَّانَةٌ', showBangla: true, showArabic: true },
{ bangla: 'নারিকেলগুলো', arabic: 'رُمَّانٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি সমুদ্র', arabic: 'بَحْرٌ', showBangla: true, showArabic: true },
{ bangla: 'সমুদ্রগুলো', arabic: 'بِحَارٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি গ্রাম', arabic: 'قَرْيَةٌ', showBangla: true, showArabic: true },
{ bangla: 'গ্রামগুলো', arabic: 'قُرًى', showBangla: true, showArabic: true },
{ bangla: 'একটি গল্প', arabic: 'قِصَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'গল্পগুলো', arabic: 'قِصَصٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি ফল', arabic: 'فَاكِهَةٌ', showBangla: true, showArabic: true },
{ bangla: 'ফলগুলো', arabic: 'فَوَاكِهُ', showBangla: true, showArabic: true },
{ bangla: 'একটি বাগান', arabic: 'حَدِيقَةٌ', showBangla: true, showArabic: true },
{ bangla: 'বাগানগুলো', arabic: 'حَدَائِقُ', showBangla: true, showArabic: true },
{ bangla: 'একটি খেজুরগাছ', arabic: 'نَخْلَةٌ', showBangla: true, showArabic: true },
{ bangla: 'খেজুরগাছগুলো', arabic: 'نَخِيلٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি কামরা', arabic: 'غُرْفَةٌ', showBangla: true, showArabic: true },
{ bangla: 'কামরাগুলো', arabic: 'غُرَفٌ', showBangla: true, showArabic: true },
{ bangla: 'ধনী (পুরুষ)', arabic: 'غَنِيٌّ', showBangla: true, showArabic: true },
{ bangla: 'ধনী (নারী)', arabic: 'غَنِيَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'চিককার/সৎ', arabic: 'صَالِحٌ', showBangla: true, showArabic: true },
{ bangla: 'সৎগণ', arabic: 'صَالِحُونَ', showBangla: true, showArabic: true },
{ bangla: 'সত্যবাদী', arabic: 'صَادِقٌ', showBangla: true, showArabic: true },
{ bangla: 'সত্যবাদীরা', arabic: 'صَادِقُونَ', showBangla: true, showArabic: true },
{ bangla: 'মিথ্যাবাদী', arabic: 'كَاذِبٌ', showBangla: true, showArabic: true },
{ bangla: 'মিথ্যাবাদীরা', arabic: 'كَاذِبُونَ', showBangla: true, showArabic: true },
{ bangla: 'একটি আকাশ', arabic: 'سَمَاءٌ', showBangla: true, showArabic: true },
{ bangla: 'আকাশসমূহ', arabic: 'سَمَاوَاتٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি চমৎকার সময়', arabic: 'وَقْتٌ', showBangla: true, showArabic: true },
{ bangla: 'চমৎকার সময়গুলো', arabic: 'أَوْقَاتٌ', showBangla: true, showArabic: true },
{ bangla: 'এটি (পুরুষের জন্য)', arabic: 'هَذَا', showBangla: true, showArabic: true },
{ bangla: 'এটি (নারীর জন্য)', arabic: 'هَذِهِ', showBangla: true, showArabic: true },
{ bangla: 'এরা/এগুলো', arabic: 'هَؤُلَاءِ', showBangla: true, showArabic: true }
]
},
{
id:11,vocabulary: [
{ bangla: 'তার বই', arabic: 'كِتَابُهُ - كِتَابُهَا', showBangla: true, showArabic: true },
{ bangla: 'তাদের বই', arabic: 'كِتَابُهُمْ - كِتَابُهُنَّ', showBangla: true, showArabic: true },
{ bangla: 'তোমার বই', arabic: 'كِتَابُكَ - كِتَابُكِ', showBangla: true, showArabic: true },
{ bangla: 'তোমাদের বই', arabic: 'كِتَابُكُمْ - كِتَابُكُنَّ', showBangla: true, showArabic: true },
{ bangla: 'আমার বই', arabic: 'كِتَابِي', showBangla: true, showArabic: true },
{ bangla: 'আমাদের বই', arabic: 'كِتَابُنَا', showBangla: true, showArabic: true },
{ bangla: 'স্বামী/স্ত্রী', arabic: 'زَوْجٌ - زَوْجَةٌ', showBangla: true, showArabic: true },
{ bangla: 'স্বামীরা/স্ত্রীরা', arabic: 'أَزْوَاجٌ', showBangla: true, showArabic: true },
{ bangla: 'নাম', arabic: 'اِسْمٌ', showBangla: true, showArabic: true },
{ bangla: 'নামসমূহ', arabic: 'أَسْمَاءٌ', showBangla: true, showArabic: true },
{ bangla: 'দুধ', arabic: 'لَبَنٌ', showBangla: true, showArabic: true },
{ bangla: 'দুধগুলো', arabic: 'أَلْبَانٌ', showBangla: true, showArabic: true },
{ bangla: 'মামা', arabic: 'خَالٌ', showBangla: true, showArabic: true },
{ bangla: 'মামারা', arabic: 'خُوَّالٌ', showBangla: true, showArabic: true },
{ bangla: 'খালা', arabic: 'خَالَةٌ', showBangla: true, showArabic: true },
{ bangla: 'খালারা', arabic: 'خَالَاتٌ', showBangla: true, showArabic: true },
{ bangla: 'চাচা', arabic: 'عَمٌّ', showBangla: true, showArabic: true },
{ bangla: 'চাচারা', arabic: 'أَعْمَامٌ', showBangla: true, showArabic: true },
{ bangla: 'ফুপু', arabic: 'عَمَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'ফুপুরা', arabic: 'عَمَّاتٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি শিশু', arabic: 'طِفْلٌ - طِفْلَةٌ', showBangla: true, showArabic: true },
{ bangla: 'শিশুরা', arabic: 'أَطْفَالٌ', showBangla: true, showArabic: true },
{ bangla: 'শক্তিশালী', arabic: 'قَوِيٌّ', showBangla: true, showArabic: true },
{ bangla: 'শক্তিশালীরা', arabic: 'قُوِّيُونَ', showBangla: true, showArabic: true },
{ bangla: 'বন্ধু', arabic: 'صَدِيقٌ', showBangla: true, showArabic: true },
{ bangla: 'বন্ধুরা', arabic: 'أَصْدِقَاءُ', showBangla: true, showArabic: true },
{ bangla: 'শত্রু', arabic: 'عَدُوٌّ', showBangla: true, showArabic: true },
{ bangla: 'শত্রুরা', arabic: 'أَعْدَاءٌ', showBangla: true, showArabic: true },
{ bangla: 'কুকুর', arabic: 'كَلْبٌ', showBangla: true, showArabic: true },
{ bangla: 'কুকুরগুলো', arabic: 'كِلَابٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি গাধা', arabic: 'حِمَارٌ', showBangla: true, showArabic: true },
{ bangla: 'গাধাগুলো', arabic: 'حَمِيرٌ', showBangla: true, showArabic: true },
{ bangla: 'বড়', arabic: 'كَبِيرٌ - كَبِيرَةٌ', showBangla: true, showArabic: true },
{ bangla: 'বড়রা', arabic: 'كِبَارٌ', showBangla: true, showArabic: true },
{ bangla: 'ছোট', arabic: 'صَغِيرٌ - صَغِيرَةٌ', showBangla: true, showArabic: true },
{ bangla: 'ছোটরা', arabic: 'صِغَارٌ', showBangla: true, showArabic: true },
{ bangla: 'ভাল', arabic: 'جَيِّدٌ - جَيِّدَةٌ', showBangla: true, showArabic: true },
{ bangla: 'ভালরা', arabic: 'جَيِّدُونَ', showBangla: true, showArabic: true },
{ bangla: 'নতুন', arabic: 'جَدِيدٌ - جَدِيدَةٌ', showBangla: true, showArabic: true },
{ bangla: 'নতুনরা', arabic: 'جُدُدٌ', showBangla: true, showArabic: true },
{ bangla: 'পুরাতন', arabic: 'قَدِيمٌ - قَدِيمَةٌ', showBangla: true, showArabic: true },
{ bangla: 'পুরাতনরা', arabic: 'قُدَمَاءُ', showBangla: true, showArabic: true }
]
},
{
id:12,
vocabulary: [
{ bangla: 'অন্তর', arabic: 'قَلْبٌ', showBangla: true, showArabic: true },
{ bangla: 'অন্তরসমূহ', arabic: 'قُلُوبٌ', showBangla: true, showArabic: true },
{ bangla: 'মেষ', arabic: 'مَاشِيَةٌ', showBangla: true, showArabic: true },
{ bangla: 'মেষসমূহ', arabic: 'مَوَاشٍ', showBangla: true, showArabic: true },
{ bangla: 'তারকা', arabic: 'نَجْمٌ', showBangla: true, showArabic: true },
{ bangla: 'তারকাসমূহ', arabic: 'نُجُومٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি গাধা', arabic: 'حِمَارٌ', showBangla: true, showArabic: true },
{ bangla: 'গাধাগুলো', arabic: 'حَمِيرٌ', showBangla: true, showArabic: true },
{ bangla: 'পাহাড়', arabic: 'جَبَلٌ', showBangla: true, showArabic: true },
{ bangla: 'পাহাড়গুলো', arabic: 'جِبَالٌ', showBangla: true, showArabic: true },
{ bangla: 'বাটি', arabic: 'دِرَاءٌ', showBangla: true, showArabic: true },
{ bangla: 'বাটিগুলো', arabic: 'أَدْرِيَةٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি বাজার', arabic: 'سُوقٌ', showBangla: true, showArabic: true },
{ bangla: 'বাজারগুলো', arabic: 'أَسْوَاقٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি টেবিল', arabic: 'مَشْرِفٌ', showBangla: true, showArabic: true },
{ bangla: 'টেবিলগুলো', arabic: 'مَشَارِفٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি জামা', arabic: 'قَمِيصٌ', showBangla: true, showArabic: true },
{ bangla: 'জামাগুলো', arabic: 'قُمْصَانٌ', showBangla: true, showArabic: true },
{ bangla: 'একটি রাস্তা', arabic: 'طَرِيقٌ', showBangla: true, showArabic: true },
{ bangla: 'রাস্তা', arabic: 'طُرُقٌ', showBangla: true, showArabic: true },
{ bangla: 'অভিভাবক', arabic: 'وَلِيٌّ', showBangla: true, showArabic: true },
{ bangla: 'অভিভাবকগণ', arabic: 'أَوْلِيَاءٌ', showBangla: true, showArabic: true },
{ bangla: 'আঙ্গুর', arabic: 'عِنَبٌ', showBangla: true, showArabic: true },
{ bangla: 'আঙ্গুরসমূহ', arabic: 'عُنُبٌ', showBangla: true, showArabic: true },
{ bangla: 'চেহারা', arabic: 'وَجْهٌ', showBangla: true, showArabic: true },
{ bangla: 'চেহারাগুলো', arabic: 'وُجُوهٌ', showBangla: true, showArabic: true },
{ bangla: 'পেট', arabic: 'بَطْنٌ', showBangla: true, showArabic: true },
{ bangla: 'পেটগুলো', arabic: 'بُطُونٌ', showBangla: true, showArabic: true },
{ bangla: 'পিঠ', arabic: 'ظَهْرٌ', showBangla: true, showArabic: true },
{ bangla: 'পিঠগুলো', arabic: 'ظُهُورٌ', showBangla: true, showArabic: true },
{ bangla: 'বুক', arabic: 'صَدْرٌ', showBangla: true, showArabic: true },
{ bangla: 'বুকগুলো', arabic: 'صُدُورٌ', showBangla: true, showArabic: true },
{ bangla: 'চোখ', arabic: 'عَيْنٌ', showBangla: true, showArabic: true },
{ bangla: 'চোখগুলো', arabic: 'عُيُونٌ', showBangla: true, showArabic: true },
{ bangla: 'হাত', arabic: 'يَدٌ', showBangla: true, showArabic: true },
{ bangla: 'হাতগুলো', arabic: 'أَيْدٍ', showBangla: true, showArabic: true },
{ bangla: 'কারাগার', arabic: 'سِجْنٌ', showBangla: true, showArabic: true },
{ bangla: 'উত্তম/ভাল', arabic: 'طَيِّبٌ - طَيِّبَةٌ', showBangla: true, showArabic: true },
{ bangla: 'ঢাল', arabic: 'جُنَّةٌ', showBangla: true, showArabic: true },
{ bangla: 'সর্বশ্রেষ্ঠ', arabic: 'فَضْلٌ', showBangla: true, showArabic: true },
{ bangla: 'অধিক', arabic: 'أَكْثَرُ', showBangla: true, showArabic: true },
{ bangla: 'আল্লাহর কাছে সবচেয়ে প্রিয়', arabic: 'أَحَبُّ إِلَى اللهِ', showBangla: true, showArabic: true }
]

}
      ],
      vocabulary: [] // Current vocabulary to display
    };
  },
  computed: {
    filteredVocabulary() {
      const query = this.searchQuery.toLowerCase();
      return this.vocabulary.filter(
        pair =>
          pair.bangla.toLowerCase().includes(query) ||
          pair.arabic.toLowerCase().includes(query)
      );
    },
paginatedButtons() {
const total = this.lessons.length;
const current = this.activeLesson;
const range = 5; // Maximum number of buttons to show in the range
const buttons = [];

if (total <= range) {
  // If total lessons are less than or equal to the range, show all lessons
  for (let i = 1; i <= total; i++) buttons.push(i);
} else {
  // Add the first lesson (always visible)
  if (current > 3) {
    buttons.push(1); // Include the first lesson
    if (current > 4) buttons.push('...'); // Add ellipsis for skipped lessons
  }

  // Add the current lesson and up to 2 lessons before and after it
  for (let i = Math.max(1, current - 2); i <= Math.min(total, current + 2); i++) {
    buttons.push(i);
  }

  // Add the last lesson (always visible)
  if (current < total - 2) {
    if (current < total - 3) buttons.push('...'); // Add ellipsis for skipped lessons
    buttons.push(total); // Include the last lesson
  }
}

return buttons;
}
}


,
  methods: {
 

    loadLesson(lessonId) {
      const selectedLesson = this.lessons.find(lesson => lesson.id === lessonId);
      if (selectedLesson) {
        this.vocabulary = JSON.parse(JSON.stringify(selectedLesson.vocabulary)); // Deep copy
        this.activeLesson = lessonId;
      }
    },
    prevLesson() {
if (this.activeLesson > 1) {
  this.loadLesson(this.activeLesson - 1);
}
},
nextLesson() {
if (this.activeLesson < this.lessons.length) {
  this.loadLesson(this.activeLesson + 1);
}
},
    toggleText(pair, type, event) {
      const backgroundColor = window.getComputedStyle(event.target).backgroundColor;

      if (type === 'bangla') {
        pair.showBangla = !pair.showBangla;
        if (!pair.showBangla) {
          pair.banglaBgColor = backgroundColor;
        }
      } else if (type === 'arabic') {
        pair.showArabic = !pair.showArabic;
        if (!pair.showArabic) {
          pair.arabicBgColor = backgroundColor;
        }
      }
    },
    showAll(type) {
      this.vocabulary.forEach(pair => {
        if (type === 'bangla') pair.showBangla = true;
        if (type === 'arabic') pair.showArabic = true;
      });
    },
    hideAll(type) {
      this.vocabulary.forEach(pair => {
        if (type === 'bangla') {
          pair.showBangla = false;
          pair.banglaBgColor = this.getDefaultBackgroundColor('bangla');
        }
        if (type === 'arabic') {
          pair.showArabic = false;
          pair.arabicBgColor = this.getDefaultBackgroundColor('arabic');
        }
      });
    },
    getDefaultBackgroundColor(type) {
      return type === 'bangla' ? 'rgb(243, 244, 246)' : 'rgb(219, 234, 254)';
    }
  },
  created() {
    this.loadLesson(1); // Load Lesson 1 by default
  }
});

app.mount('#app');