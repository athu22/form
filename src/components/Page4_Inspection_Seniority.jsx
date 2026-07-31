import React from 'react';

const Page4_Inspection_Seniority = () => {
  return (
    <div className="a4-page" style={{ fontSize: '14px', lineHeight: '1.8' }}>
      
      {/* Anubandha 17 */}
      <div className="text-center font-bold mb-4">
        <h3 style={{ fontSize: '16px' }}>ಅನುಬಂಧ-17</h3>
        <h2 style={{ fontSize: '18px', textDecoration: 'underline', marginTop: '10px' }}>
          ಹನಿ ನೀರಾವರಿಕ್ಷೇತ್ರ ಪರಿವೀಕ್ಷಣೆ ವರದಿ
        </h2>
      </div>

      <div style={{ textIndent: '40px', marginTop: '30px' }}>
        ದಿನಾಂಕ: <input type="date" style={{ width: '150px' }} /> ರಂದು ಶ್ರೀ/ಶ್ರೀಮತಿ <input type="text" data-sync="applicantName" style={{ width: '250px' }} /> 
        ಗ್ರಾಮ : <input type="text" data-sync="village" style={{ width: '120px' }} /> <br/>
        ರಿ.ಸ.ನಂ: <input type="text" data-sync="surveyNo" style={{ width: '150px' }} /> ಕ್ಷೇತ್ರ (ಹೇ.) <input type="text" data-sync="landAreaHectares" style={{ width: '120px' }} /> ಗೆ ಭೇಟಿ ನೀಡಿದ್ದು ಸದರಿಯವರು ಕ್ಷೇತ್ರದಲ್ಲಿ
        ಹನಿ ನೀರಾವರಿಯನ್ನು ಅಳವಡಿಸಿದ್ದು, ಪೂರೈಕೆ ಪತ್ರದಲ್ಲಿ (ಡಿಲೇವರಿ ಚಲನ್) ತಿಳಿಸಿರುವಂತೆ ಎಲ್ಲ ಸಲಕರಣೆಗಳನ್ನು
        ಒದಗಿಸಿರುತ್ತಾರೆ. ಹಾಗೂ ಎಲ್ಲ ಸಲಕರಣೆಗಳು ತೃಪ್ತಿಕರವಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಿವೆ. ಸದರಿ ಹನಿ ನೀರಾವರಿ ಘಟಕವು
        <input type="text" style={{ width: '80px' }} /> ಮೀಟರ್‌ಗಳಲ್ಲಿ ಅಳವಡಿಸಿದ್ದು ಈ ಹೊಲದ ರೇಖಾಂಶ ಹಾಗೂ ಅಕ್ಷಾಂಶ ಈ ಕೆಳಗಿನಂತಿರುತ್ತದೆ
        ಎಂದುದೃಢೀಕರಿಸುತ್ತೇನೆ.
      </div>

      <div style={{ marginTop: '20px', marginLeft: '40px' }}>
        <p>ಅಕ್ಷಾಂಶ : <input type="text" style={{ width: '200px' }} /></p>
        <p>ರೇಖಾಂಶ : <input type="text" style={{ width: '200px' }} /></p>
      </div>

      <div className="flex justify-between text-center" style={{ marginTop: '40px' }}>
        <div>
          <div style={{ marginBottom: '10px', height: '60px' }}></div>
          <p>ರೈತನ ಸಹಿ</p>
        </div>
        <div>
          <p>ಸಹಾಯಕ ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <p>ರೈತ ಸಂಪರ್ಕಕೇಂದ್ರ</p>
        </div>
        <div>
          <p>ಕೃಷಿಅಧಿಕಾರಿ</p>
          <p>ರೈತ ಸಂಪರ್ಕಕೇಂದ್ರ</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <p>ಸ್ಥಳ : <input type="text" /></p>
          <p>ದಿನಾಂಕ : <input type="date" /></p>
        </div>
      </div>

      <hr style={{ margin: '40px 0', border: '1px dashed #ccc' }} className="no-print" />

      {/* Anubandha 18 */}
      <div className="text-center font-bold mb-4" style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '16px' }}>ಅನುಬಂಧ-18</h3>
        <h2 style={{ fontSize: '18px', textDecoration: 'underline', marginTop: '10px' }}>
          ದೃಢೀಕರಣ ಪತ್ರ
        </h2>
      </div>

      <div style={{ textIndent: '40px', marginTop: '30px' }}>
        ಈ ಮೂಲಕ ದೃಢೀಕರಿಸುವುದೇನೆಂದರೆ 2023-24 ನೇ ಸಾಲಿನ ಹನಿ ನೀರಾವರಿಯೋಜನೆಯಡಿಯಲ್ಲಿ
        ಶ್ರೀ/ಶ್ರೀಮತಿ <input type="text" data-sync="applicantName" style={{ width: '300px' }} /> ಗ್ರಾಮ <input type="text" data-sync="village" style={{ width: '150px' }} /> 
        ಇವರ ಜೇಷ್ಠತಾ ಸಂಖ್ಯೆ <input type="text" style={{ width: '150px' }} /> ಯಾಗಿದ್ದು ಸದರಿಯವರು ಜೇಷ್ಠತೆಯಲ್ಲಿಿದ್ದು ಇವರಿಗೆ ಹನಿ
        ನೀರಾವರಿಯ ಸಹಾಯಧನ ನೀಡಲುಯಾವುದೇ ಅಭ್ಯಂತರವಿರುವುದಿಲ್ಲ.
      </div>

      <div className="flex justify-between mt-8">
        <div>
          <p>ಸ್ಥಳ : <input type="text" /></p>
          <p>ದಿನಾಂಕ : <input type="date" /></p>
        </div>
        <div className="text-center">
          <p>ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <p>ರೈತ ಸಂಪರ್ಕಕೇಂದ್ರ</p>
        </div>
      </div>

      <div className="text-right" style={{ marginTop: '40px' }}>
        <p>ಸಹಾಯಕ ಕೃಷಿ ನಿರ್ದೇಶಕರು</p>
        <p>ಹುಕ್ಕೇರಿ</p>
      </div>

    </div>
  );
};

export default Page4_Inspection_Seniority;
