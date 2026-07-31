import React from 'react';

const Page3_NOC = () => {
  return (
    <div className="a4-page" style={{ fontSize: '15px', lineHeight: '2' }}>
      <div className="text-center font-bold mb-4">
        <h3 style={{ fontSize: '16px' }}>ಅನುಬಂಧ-16</h3>
        <h2 style={{ fontSize: '18px', textDecoration: 'underline', marginTop: '10px' }}>
          ನಿರಾಕ್ಷೇಪಣಾ ಪ್ರಮಾಣ ಪತ್ರ
        </h2>
      </div>

      <div style={{ textIndent: '40px', marginTop: '30px' }}>
        <input type="text" data-sync="taluka" style={{ width: '150px' }} /> ತಾಲ್ಲೂಕಿನ <input type="text" data-sync="village" style={{ width: '150px' }} /> ಗ್ರಾಮದ ನಾನು
        <input type="text" data-sync="applicantName" style={{ width: '250px' }} /> ಸರ್ವೆನಂ: <input type="text" data-sync="surveyNo" style={{ width: '100px' }} /> ರಲ್ಲಿ
        <input type="text" data-sync="landAreaHectares" style={{ width: '100px' }} /> ಕ್ಷೇತ್ರದ ಕೃಷಿ ಜಮೀನು ಹೊಂದಿದ್ದು, ಈ ಮೂಲಕ ಪ್ರಮಾಣೀಕರಿಸುವದೆನೆಂದರೆ, 2023-24
        ನೇ ಸಾಲಿನಲ್ಲಿಮೆ:[ತಯಾರಕರು <input type="text" data-sync="companyName" style={{ width: '300px' }} />
        <input type="text" style={{ width: '150px' }} /> : <input type="text" style={{ width: '150px' }} /> )ಇವರಿಂದ
        <input type="text" style={{ width: '120px' }} /> ಉಪಕರಣ/ತುಂತುರು ನೀರಾವರಿ
        ಘಟಕ/ಹನಿ ನೀರಾವರಿ ಘಟಕವನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿದ್ದು, ನನಗೆ ದೊರಕಬೇಕಾದ ಎಲ್ಲಾ ಸಾಮಗ್ರಿಗಳು (ನಿಗದಿತ
        ಗುಣಮಟ್ಟ ಹಾಗೂ ಪ್ರಮಾಣ) ಪೂರೈಕೆದಾರರಿಂದ ಸರಬರಾಜಾಗಿದ್ದು ಘಟಕವು ತೃಪ್ತಿಕರವಾಗಿ ನನ್ನ ಜಮೀನಿನಲ್ಲಿ
        ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಿದೆ.
      </div>

      <div style={{ textIndent: '40px', marginTop: '20px' }}>
        ಸದರಿ <input type="text" style={{ width: '150px' }} /> ಉಪಕರಣ/ತುಂತುರು ನೀರಾವರಿಘಟಕ/ ಹನಿ ನೀರಾವರಿ ಘಟಕ ಅಳವಡಿಸಿದಕ್ಕೆ
        ಸಂಬಂಧಿಸಿದಂತೆ ಪೂರ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ಹಣ ಭರಿಸಲು ಸಾಧ್ಯವಾಗದ ಕಾರಣ ಕೇವಲ ರೈತರ ಪಾಲಿನ ಬಾಬತ್ತು
        ರೂ <input type="text" style={{ width: '200px' }} /> ಭರಿಸಿ. ಘಟಕಕ್ಕೆ ನೀಡಬೇಕಾದ ಸರಕಾರದ ಸಹಾಯಧನದ
        ಮೊತ್ತವನ್ನು ಮೆ|| <input type="text" data-sync="companyName" style={{ width: '300px' }} /> ಇವರಿಗೆ
        ನೇರವಾಗಿ ಸಂದಾಯ ಮಾಡಲು ನನಗೆ ಒಪ್ಪಿಗೆ ಇದ್ದು, ಯಾವುದೇ ಅಭ್ಯಂತರ ಇಲ್ಲವೆಂದು ಈ ಮೂಲಕ
        ಪ್ರಮಾಣೀಕರಿಸುತ್ತೇನೆ.
      </div>

      <div className="flex justify-between mt-8">
        <div>
          <p>ದಿನಾಂಕ : <input type="date" /></p>
          <p>ಸ್ಥಳ : <input type="text" /></p>
        </div>
        <div className="text-center">
          <div style={{ marginBottom: '10px', height: '60px' }}></div>
          <p>ರೈತರ ಹೆಸರು ಮತ್ತು ಸಹಿ</p>
        </div>
      </div>

      <div className="flex justify-between text-center" style={{ marginTop: '80px' }}>
        <div>
          <p>ಸಹಾಯಕ ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <div style={{ marginTop: '30px' }}><input type="text" style={{ width: '150px' }} /></div>
        </div>
        <div>
          <p>ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <p>ರೈತ ಸಂಪರ್ಕಕೇಂದ್ರ ತಾಲ್ಲೂಕು</p>
          <div style={{ marginTop: '10px' }}><input type="text" style={{ width: '150px' }} /></div>
        </div>
        <div>
          <p>ಸಹಾಯಕ ಕೃಷಿ ನಿರ್ದೇಶಕರು</p>
          <div style={{ marginTop: '30px' }}><input type="text" style={{ width: '150px' }} /></div>
        </div>
      </div>
    </div>
  );
};

export default Page3_NOC;
