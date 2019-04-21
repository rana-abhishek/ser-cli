/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import VideoTemplate from "./videoCardTemplate";

import VideoSection from "./aboutVideoSection";
import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";

function SectionInterested({ ...props }) {
  const { classes } = props;
  const videoinf = [
    {
      videoid: "6va1cVonqVM",
      tag: "ENTERPRISE",
      head:
        "GYNECOMASTIA SURGERY: Beware of False 'Reviews': Dr JB Ratti VITAL CLINIC",
      content:
        "It is important for gynecomastia patients to be rightly informed about the condition, surgery and post-operative progress. Best sources for correct information are text books on the subject or your surgeon. Ask questions directly from your surgeon by Email or a telephonic call. Reviews from previous patients are useful but, unfortunately, some are very misleading false reviews which are written by motivated people or by some advertising agencies writing on behalf of their clients. Such people always hide their identity and will never share pictures or details of their surgery. Patients must be beware of such unscrupulous persons. Their intent is only to mislead or promote their clients by writing false reviews on some portals."
    },
    {
      videoid: "5Ka7MTtWZb8",
      tag: "ENTERPRISE",
      head:
        "GYNECOMASTIA SURGERY- Totally under Local Anesthesia at Vital Clinic: Dr JB Ratti",
      content:
        "Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent. Cosmetic results are always good because the incision is placed at the infra-areolar border. Only a very small cut is given even when the breasts are very large. Scars hides in the dark area."
    },
    {
      videoid: "PJw9YGWBKvs",
      tag: "ENTERPRISE",
      head: "GYNECOMASTIA SURGERY: Good & Bad Scars: VITAL CLINIC Dr JB Ratti",
      content:
        "Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent. Cosmetic results are always good because the incision is placed at the infra-areolar border. Scars hides in the dark area."
    },
    {
      videoid: "E8vZH6Q5YJE",
      tag: "ENTERPRISE",
      head:
        "GYNECOMASTIA SURGERY: Under LA, Painless & Bloodless Office Surgery: Dr JB Ratti",
      content:
        "Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent."
    },
    {
      videoid: "FJHXovDlCl8",
      tag: "ENTERPRISE",
      head:
        "GYNECOMASTIA SURGERY: Under LA, Painless & Bloodless Office Surgery: Dr JB Ratti",
      content:
        "Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent."
    },
    {
      videoid: "5hVxo0DZ5Oc",
      tag: "ENTERPRISE",
      head: `الجينكوماستيا الجراحة: تحت لا، غير مؤلم و بلا دموي`,
      content: `
        التثدي أو رجل جراحة الثدي في فيتال كلينيك دلهي الهند، يتم تنفيذه تماما تحت التخدير الموضعي. المريض لا يزال مستيقظا طوال أو قد يذهب إلى النوم. الجراحة غير مؤلمة تماما، ودموية مثل إجراء المكتب. المرضى يأتون بعد الإفطار، والحصول على الجراحة القيام به والعودة إلى ديارهم مباشرة بعد بعض المرطبات بعد الجراحة. يمكنهم الذهاب إلى عملهم من اليوم التالي. تقنية تومسنت هو أفضل وسيلة للقيام بهذه الجراحة. لديها ملف سلامة عالية جدا. النتائج دائمة.`
    },
    {
      videoid: "t5-Tc_P8Um4",
      tag: "ENTERPRISE",
      head: "الجينكوماستيا الجراحة: تحت لا، غير مؤلم و بلا دموي",
      content: `التثدي أو رجل جراحة الثدي في فيتال كلينيك دلهي الهند، يتم تنفيذه تماما تحت التخدير الموضعي. المريض لا يزال مستيقظا طوال أو قد يذهب إلى النوم. الجراحة غير مؤلمة تماما، ودموية مثل إجراء المكتب. المرضى يأتون بعد الإفطار، والحصول على الجراحة القيام به والعودة إلى ديارهم مباشرة بعد بعض المرطبات بعد الجراحة. يمكنهم الذهاب إلى عملهم من اليوم التالي. تقنية تومسنت هو أفضل وسيلة للقيام بهذه الجراحة. لديها ملف سلامة عالية جدا. النتائج دائمة.`
    },
    {
      videoid: "0GkQWnxTfas",
      tag: "ENTERPRISE",
      head:
        "ஜினெக்டியாஸ்டு சர்ஜரி: லோக்கல் அனெஸ்தீசியாவின் கீழ், வலியற்ற, இரத்தமற்ற மற்றும் முழுமையான சிகிச்சை",
      content:
        "டெல்லி இந்தியாவின் முக்கிய மருத்துவ மையத்தில் கின்காஸ்டாஸ்டியா அல்லது மேன் பூப்ஸ் அறுவை சிகிச்சை என்பது உள்ளூர் மயக்கத்தின் கீழ் முற்றிலும் நிகழ்த்தப்படுகிறது. நோயாளி முழுவதும் விழித்தெழும் அல்லது தூங்க செல்லலாம். அறுவை சிகிச்சை முற்றிலும் வலியற்றது, இரத்தமில்லாதது மற்றும் ஒரு அலுவலக நடைமுறை போன்றது. காலை உணவுக்குப் பிறகு வந்த நோயாளிகள், அறுவைச் சிகிச்சைக்குப் பிறகு சில அறுவைச் சிகிச்சைக்குப் பிறகு அவற்றின் அறுவைச் சிகிச்சை செய்து உடனடியாக வீட்டுக்குப் போங்கள். அடுத்த நாள் முதல் அவர்கள் வேலைக்கு செல்லலாம். இந்த அறுவை சிகிச்சையின் சிறந்த வழி டிரம்செண்ட் நுட்பம் ஆகும். இது மிகவும் உயர்ந்த பாதுகாப்பு சுயவிவரத்தை கொண்டுள்ளது. முடிவுகள் நிரந்தரமாக உள்ளன."
    },
    {
      videoid: "Wt8KjiCn0Zg",
      tag: "ENTERPRISE",
      head:
        "جراحه النسائية: تحت التخدير الموضعي ، وغير مؤلم ، وغير دموي وعلاج كامل",
      content:
        "الجراحة النسائية أو الثدي الرجل في عيادة حيوية دلهي الهند ، يتم تنفيذها تماما تحت التخدير المحلي. المريض لا يزال مستيقظا في جميع انحاء أو قد يذهب إلى النوم. الجراحة غير مؤلمه تماما ، وغير دموي ومثل اجراء المكتب. المرضي ياتون بعد الإفطار ، والحصول علي القيام بعمليه جراحيه والذهاب إلى المنزل علي الفور بعد بعض المرطبات بعد الجراحة. يمكنهم الذهاب إلى عملهم من اليوم التالي التقنية المتوهجة هي أفضل طريقه للقيام بهذه الجراحة لديه صوره عاليه جدا للسلامة. والنتائج دائمة."
    },
    {
      videoid: "MlII60KtQdc",
      tag: "ENTERPRISE",
      head: "Gynecomastia Surgery At Vital Clinic Delhi India: Dr JB Ratti",
      content: `Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent.`
    },
    {
      videoid: "RrBNQZffke4",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia Surgery as Office Surgery: at VITAL CLINIC Delhi India",
      content: `Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent.`
    },
    {
      videoid: "jgd-ZoKjUk0",
      tag: "ENTERPRISE",
      head: "Gynecomastia or Man Boobs Surgery at Vital Clinic: Dr JB Ratti",
      content: `Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent.`
    },
    {
      videoid: "leET_i-mZyU",
      tag: "ENTERPRISE",
      head:
        "Man Boobs Surgery Under Local Anesthesia at Vital Clinic Delhi India",
      content: `Gynecomastia or Man Boobs surgery at Vital Clinic Delhi India, is performed totally under local anesthesia. Patient remains awake throughout or may go to sleep. Surgery is completely painless, bloodless and like an office procedure. Patients come after breakfast, get their surgery done and go home immediately after some refreshment following surgery. They can go to their work from the very next day. Tumescent technique is the best way of doing this surgery. It has a very high safety profile. Results are permanent.`
    },
    {
      videoid: "YeNRE6KonCs",
      tag: "ENTERPRISE",
      head:
        "Breast Augmentation Totally under Local Anesthesia: Dr JB Ratti VITAL CLINIC India",
      content: `Breast size can be increased by silicone implants, totally under local anesthesia, patient being completely pain free and comfortable. Breast Augmentation by Silicone Implants is a very satisfying surgery to restore breast volume, lift mildly sagging breasts or give a good size to under developed breasts. Patients go home immediately after surgery. Post operation pain is quite bearable. Normal routine activities can be resumed very quickly.`
    },
    {
      videoid: "BNRonEOgcrA",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia Surgery Complications- Correction of Nipple-areola Depression Dr JB Ratti VITAL CLINIC",
      content: `We are seeing many gynecomastia Man boobs/Male breasts surgery patients who come for corrections of complication from a previous surgery elsewhere. Most common are depressions in nipple-areola area, often due to excessive removal of base support. Corrective surgeries are difficult but, very rewarding for both patient and surgeon. We do these corrections totally under local anesthesia, as Awake Surgery. Patients go home immediately after surgery.`
    },

    {
      videoid: "XRmoCqBRbpI",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia/Man boobs/Male breasts - Awake Surgery by Dr JB Ratti VITAL CLINIC",
      content: `Gynecomastia / Man Boobs / Male Breasts Surgery by Tumescent Awake technique is done entirely under TUMESCENT AWAKE LOCAL ANESTHESIA (only the chest area is made numb and you, while being fully awake, do not feel any pain during surgery). This makes the surgery extremely safe. The entire surgery is done through very minute cuts, placed in hidden areas, which are hardly noticeable after few months. It is bloodless and painless surgery. You may go home immediately after surgery when it is done by the TUMESCENT AWAKE TECHNIQUE. No drainage tubes are required. There will be early return to normal activities after surgery`
    },
    {
      videoid: "xFyVPY9ukK0",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia /Male breasts /Man boobs surgery: Awake, Under LA by Dr JB Ratti at Vital Clinic",
      content: `Gynecomastia / Male Breasts / Man Boobs surgery is performed totally under local anesthesia. Patient remains awake and conversing while the surgery is going on. There is no pain or discomfort throughout the surgery. Surprisingly, when this surgery is done under tumescent local anesthesia, there is virtually no pain even after the effect of anesthesia wears off! An operation under tumescent local anesthesia-AWAKE-SURGERY, is the safest and best way of getting rid of male breasts. Patient remains alert, fully mobile and can go home immediately after surgery. Tumescent technique of local anesthesia gives exceptional patient safety. All boys and men get a completely normal looking flat chest, permanently.`
    },
    {
      videoid: "IugjU5xpHAk",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia, Male Breasts, Man boobs Surgery- Awake Surgery by Dr JB Ratti Vital Clinic",
      content: `This was a very large glandular gynaecomastia or gynecomastia / male breasts / man boobs surgery, that was done completely under local anesthesia, without sedation. He was a young boy suffering from Man boobs also called, Gynecomastia, Male Breasts or Moobs. There were very significant psychological effects on the psyche of the boy because of his condition. This surgery was done totally under local anesthesia, by the tumescent technique. It is an AWAKE surgery. Patient was awake throughout listening to some music, talking to the surgeon off and on and completely pain free. Awake technique is virtually bloodless. Patient walks back to his room immediately after surgery and after some light refreshments he can go home or to his hotel where he may be staying. Also, there is no need to be fasting for surgery. In fact, patients come for surgery after taking some breakfast at home or hotel. Safety profile is very high, and results are very satisfactory. Cost of gynecomastia surgery is also very reasonable.`
    },
    {
      videoid: "8WPHDVno4y4",
      tag: "ENTERPRISE",
      head:
        "VERY LARGE GYNAECOMASTIA / MAN BOOBS / MALE BREASTS Surgery by Dr JB Ratti at Vital Clinic",
      content: `This was a very challenging surgery completely under local anesthesia, without sedation. He was a very heavy patient with very large Man boobs also called, Gynecomastia, Male Breasts or Moobs. The breasts were hanging and there was very heavy fat deposition on the sides of the chest under the arm pits. This surgery was done totally under local anesthesia, by the tumescent technique. It is an AWAKE surgery. Patient was awake throughout listening to some music, talking to the surgeon off and on and completely pain free. He would turn to sides or lie straight, on his own, as per the requirement. Awake technique is virtually bloodless. Patient walks back to his room immediately after surgery and after some light refreshments he can go home or to his hotel where he may be staying. Also, there is no need to be fasting for surgery. In fact, patients come for surgery after taking some breakfast at home or hotel. Safety profile is very high, and results are very satisfactory. It is very cost effective also.`
    },
    {
      videoid: "BBV25LyijLc",
      tag: "ENTERPRISE",
      head:
        "Gynecomastia, Man boobs Surgery Technique under Local Anesthesia by Dr JB Ratti Vital Clinic, India",
      content: `Gynecomastia, Man boobs, Male breasts surgery technique is demonstrated here in a young boy with very large size of breasts, totally under tumescent local anesthesia. Patient remains awake and fully conversant throughout surgery. It is completely painless and bloodless. Vital Clinic in Delhi, India, specializes in performing all cosmetic surgeries totally under local anesthesia. The principles of tumescent technique as described by Jeffrey Klein of USA have been incorporated by us into Man boobs / Gynecomastia / Male breast surgeries. Patients do not feel any pain throughout and may even go to sleep for short intervals. Immediately after surgery patients walk back to their room and are given some light refreshments. After resting for some time, they can go home without any difficulty. The painless state remains for several hours after surgery, so the period of maximum pain in immediate post-op is covered during this period. The small incision inside the areola is hardly noticed as it is hidden within the dark circle around the nipple. Therefore, the cosmetic results are very good.`
    },
    {
      videoid: "Ow1JDKpWZj8",
      tag: "ENTERPRISE",
      head:
        "Best Results in Man Boobs or Gynecomastia Surgery: Dr JB Ratti Vital Clinic Delhi India",
      content: `This video is based on a paper presented at American Academy of Cosmetic Surgery 30th Annual Scientific Meeting held in January 14-19, 2014 at Fort Lauderdale, Florida USA. The paper discussed good or bad incisions for Man Boobs surgery and how to manage excess remaining skin after surgery of Man boobs / gynaecomastia, whether small or large. Good results are always achieved consistently, when the surgery of Man boobs is performed under local anesthesia by the tumescent awake technique which is painless and bloodless.`
    },
    {
      videoid: "UnAnIezeAeE",
      tag: "ENTERPRISE",
      head:
        "Very large Man Boobs / Gynecomastia Surgery technique in Local Anaesthesia: Dr JB Ratti VITAL CLINIC",
      content: `This video demonstrates that even very large size Man boobs / Gynecomastia can be very safely and completely operated upon totally under local anesthesia by the tumescent technique. There is no need to be fasting for surgery. There is no need for admission in hospital. Surgery is performed like an out-patient procedure. Patients for surgery come after light breakfast at home and may go home immediately after surgery is over. Patients are awake, pain-free and conversant throughout surgery. Tumescent 'awake' technique has a very high safety profile.`
    },
    {
      videoid: "ZYDXo_gYR5U",
      tag: "ENTERPRISE",
      head: "Gynaecomastia surgery procedure - local anaesthesia: Dr JB Ratti",
      content: `The video demonstrates the way we do gynaecomastia surgery at Vital Clinic in New Delhi, India. It is an AWAKE surgery, totally under local anesthesia. There is no need for admission in hospital. Patients come after some breakfast and immediately after surgery, they are given some refreshments and then they go home. Gynaecomastia surgery side effects are markedly reduced and Gynaecomastia surgery recovery time is also minimal. Also, the gynaecomastia surgery cost is much less than under GA.`
    },
    {
      videoid: "vMdwuA_QtGU",
      tag: "ENTERPRISE",
      head:
        "Male Breasts Male Boobs Gynaecomastia Awake Surgery Under Local Anesthesia at VITAL CLINIC",
      content: `At VITAL CLINIC we do Gynaecomastia Surgery totally under local anesthesia, by the Tumescent Awake Technique. Throughout the surgery patients may be awake or may go to sleep. They are fully conversant. Patients come for surgery after some breakfast at home. There is no need to be fasting unlike under general anesthesia, where the patient has to be fasting from night before. Immediately after the surgery is over, we give some light refreshments to patient and after that they may go home with post-op advice.`
    },
    {
      videoid: "22y6FSGruPo",
      tag: "ENTERPRISE",
      head:
        "Breast augmentation under local anaesthesia: Dr JB Ratti VITAL CLINIC Delhi India",
      content: `Breast Augmentation surgery to increase the breast size is performed totally under local anesthesia, without sedation. Patient remains awake and fully conversant throughout. There is virtually no pain immediately after surgery and patients can go home as soon as the surgery is over. This is the best and safest way of doing breast augmentation. This technique gives the best results.`
    },
    {
      videoid: "T0PjNgZh9EU",
      tag: "ENTERPRISE",
      head:
        "Dr. JB Ratti VITAL CLINIC Delhi. Male Breasts / Gynaecomastia Awake surgery under local anaesthesia.",
      content: `Gynaecomastia / Male breasts / Male boobs surgery is performed in our clinic totally under local 
      anesthesia by the Tumescent Awake technique. Patient comes to clinic after breakfast (no need to be fasting), surgery is performed under local anesthesia and he goes home immediately after surgery is over. Patient remains awake and conversing throughout even as the surgery is going on. Tumescent Awake technique is completely painless and virtually bloodless. This is the best and safest way of doing Male breasts / Gynaecomastia surgery.`
    },
    {
      videoid: "Yvl8Pc0QR-g",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti at VITAL CLINIC New Delhi India doing AWAKE Male Breast Surgery",
      content: `Dr JB Ratti performing AWAKE male breast or gynaecomastia surgery totally under local anesthesia by the tumescent technique. Patient remains awake and conversing throughout or may be sleeping. Surgery is painless and bloodless and patient goes home immediately after the operation is complete.`
    },
    {
      videoid: "A-JAvpUg2cI",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti of VITAL CLINIC New Delhi India performing AWAKE Abdominoplasty",
      content: `Total Abdominoplasty with umbilical trans-location is performed routinely at VITAL CLINIC. Patient is awake and conversing while the surgery is going on. AWAKE ABDOMINOPLASTY, totally under local anesthesia, is SAFE ABDOMINOPLASTY as it removes all risks associated with general anesthesia. Patient can go home after resting for some time in the clinic and then take the required rest at home.`
    },
    {
      videoid: "TksxUE0X_j8",
      tag: "ENTERPRISE",
      head:
        "Dr. JB Ratti VITAL CLINIC New Delhi INDIA: 'AWAKE' Male Breast Surgery",
      content: `Gynaecomastia or Male breasts surgery done totally under local anaesthesia by the tumescent technique. Patient is awake and conversing. Completely pain free and can go home immediately after surgery. Complete removal of mammary glands and very satisfactory flattening of the chest is achieved. Results are permanent.`
    },
    {
      videoid: "YG7XHmTG4rA",
      tag: "ENTERPRISE",
      head:
        "Dr. JB Ratti VITAL CLINIC New Delhi India- AWAKE LIPOSUCTION BELLY",
      content: `Awake Liposuction performed totally under local anaesthesia by the tumescent technique. It is a very safe office procedure. Patient comes in after light breakfast, gets the liposuction done and goes home. It is a painless bloodless surgery.`
    },
    {
      videoid: "jw5hYrTbx9c",
      tag: "ENTERPRISE",
      head:
        "Dr. JB Ratti VITAL CLINIC New Delhi India Cosmetic Surgery clinic -thighs liposuction",
      content: `Awake Liposuction totally under local anaesthesia by the pure tumescent technique. There is no need to come fasting for surgery and patient is on normal diet immediately after liposuction as well. Inner thighs liposuction is performed to give good separation of inner thighs as is usually seen in athletes, models or film stars. Tumescent liposuction is absolutely painless and a very safe technique. Patient remains awake and conversing during liposuction. Patient can go home immediately after liposuction is over.`
    },
    {
      videoid: "1qk3UvminwY",
      tag: "ENTERPRISE",
      head:
        "VITAL CLINIC Premier Cosmetic Surgery & Liposuction Clinic in India",
      content: `Vital Clinic is premier liposuction and cosmetic surgery clinic in New Delhi India. We specialize in Liposuctions, Abdominoplasty, Male Breast or Gynaecomastia surgery totally under local anaesthesia by the Tumescent Technique. We do Vaginoplasty, Hymen repair/restoration, Labiaplasty totally under local anaesthesia. Our patients come from many countries around the world and from different parts of India.`
    },
    {
      videoid: "nKYPrn2LPvE",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti VITAL CLINIC DELHI INDIA: Male Breast surgery: VIDEO 6",
      content: `Mammary glands removed completely. Showing the solid nature of the glands. Patient is pain free and comfortable.`
    },
    {
      videoid: "22ESmrTdwdM",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti VITAL CLINIC DELHI INDIA: Male Breast surgery: VIDEO 3",
      content: `Bloodless painless incision beginning dissection of mammary glands`
    },
    {
      videoid: "7wY1QUo6RkI",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti VITAL CLINIC DELHI INDIA: Male Breast surgery: VIDEO 2",
      content: `Liposuction completed. Only mammary glands left for removal`
    },
    {
      videoid: "-JDAmBDWTao",
      tag: "ENTERPRISE",
      head:
        "Dr JB Ratti VITAL CLINIC DELHI INDIA: Male Breast surgery: VIDEO 1",
      content: `Liposuction is done first to remove all fat. Male breast / gynaecomastia surgery being done totally under local anaesthesia by the tumescent technique. Surgery is painless, bloodless and done like a walk-in walk-out procedure. Patient is fully awake, pain free and conversing with surgeon Dr. JB Ratti of VITAL CLINIC.`
    }
  ];
  const videocontent = videoinf =>
    videoinf.map(item => {
      return (
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <VideoTemplate
            classes={classes}
            videoid={item.videoid}
            image={item.image}
            tag={item.tag}
            head={item.head}
            content={item.content}
          />
        </GridItem>
      );
    });
  return (
    <div className={classes.section} style={{ width: "100%" }}>
      <div
        style={{
          background: "rgba(166, 123, 63, 0.1)",
          padding: "30px 0",
          border: "4px solid rgb(221, 200, 129)"
        }}
      >
        <h3
          className={classes.title + " " + classes.textCenter}
          style={{ color: "rgb(94, 71, 44)", margin: "12px auto 5px" }}
        >
          Surgery Videos
        </h3>
        <VideoSection />
      </div>
      <br />
      <GridContainer>
        {/* <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <VideoTemplate classes={classes} videoid={"cPgkPIldtyM"} image={bg5} tag={"ENTERPRISE"} head={"Autodesk looks to future of 3D printing with Project Escher"} content={"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <VideoTemplate classes={classes} videoid={"c8qWaF9fGw0"} image={blog5} tag={"STARTUPS"} head={"Lyft launching cross-platform service this week"} content={"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <VideoTemplate classes={classes} videoid={"5EjQq-3Eh7U"} image={blog6} tag={"ENTERPRISE"} head={"6 insights into the French Fashion landscape"} content={"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses."}/>
        </GridItem> */}
        {videocontent(videoinf)}
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionInterestedStyle)(SectionInterested);
