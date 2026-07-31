import React, { useState } from 'react';

const Page2_Application = () => {
  return (
    <div className="a4-page" style={{ fontSize: '13px' }}>
      <div className="header-flex">
        <div className="spacer"></div>
        
        <div className="text-center font-bold title-block" style={{ marginBottom: '5px' }}>
          <h3 style={{ fontSize: '16px' }}>ಅನುಬಂಧ-2</h3>
          <h2 style={{ fontSize: '18px', marginTop: '10px' }}>
            ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ/ಸಂಸ್ಕರಣೆ/ಲಘು ನೀರಾವರಿಯೋಜನೆಯಡಿ ಸೌಲಭ್ಯ ಪಡೆಯುವ<br/>
            ರೈತನ ಅರ್ಜಿ
          </h2>
        </div>

        <div className="photo-container">
          <div className="physical-photo"></div>
        </div>
      </div>

      <div className="mb-4 font-bold">
        <p>ಇವರಿಗೆ,</p>
        <div style={{ marginTop: '5px' }}></div>
      </div>

      <table>
        <tbody>
          <tr>
            <td width="5%">1</td>
            <td width="45%">ರೈತನ ಹೆಸರು</td>
            <td width="50%"><input type="text" data-sync="applicantName" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>ತಂದೆಯ / ಗಂಡನ ಹೆಸರು</td>
            <td><input type="text" data-sync="fatherName" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>ಗ್ರಾಮ ಮತ್ತು ಹೋಬಳಿ</td>
            <td>
              ಗ್ರಾಮ: <input type="text" data-sync="village" style={{ width: '100px', marginRight: '10px' }} />
              ಹೋಬಳಿ: <input type="text" data-sync="hobli" style={{ width: '100px' }} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>ತಾಲ್ಲೂಕು/ ಜಿಲ್ಲೆ</td>
            <td>
              ತಾಲ್ಲೂಕು: <input type="text" data-sync="taluka" style={{ width: '100px', marginRight: '10px' }} />
              ಜಿಲ್ಲೆ: <input type="text" data-sync="district" style={{ width: '100px' }} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>ಮೊಬೈಲ ನಂಬರ</td>
            <td><input type="number" data-sync="mobile" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>6</td>
            <td>ಒಟ್ಟು ಹಿಡುವಳಿ (ಅರ್ಜಿಯಲ್ಲಿ ನಮೂದಿಸಿದಂತೆ)</td>
            <td>
              ಎಕರೆ: <input type="text" style={{ width: '80px', marginRight: '10px' }} />
              ಗುಂಟೆ: <input type="text" style={{ width: '80px' }} />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>ಸರ್ವೆ ನಂ ಹಾಗೂ ಗ್ರಾಮ (ಅರ್ಜಿಯಲ್ಲಿ ನಮೂದಿಸಿದಂತೆ)</td>
            <td><input type="text" data-sync="surveyNo" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>8</td>
            <td>ರೈತನ ವರ್ಗ (ಅತಿ ಸಣ್ಣ/ಸಣ್ಣ/ದೊಡ್ಡ) (ಅರ್ಜಿಯಲ್ಲಿ ನಮೂದಿಸಿದಂತೆ)</td>
            <td><input type="text" data-sync="category" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>9</td>
            <td>ಜಾತಿ (ಸಾಮಾನ್ಯ/ಪ.ಜಾ/ಪ.ಪಂ) (ಅರ್ಜಿಯಲ್ಲಿ ನಮೂದಿಸಿದಂತೆ)</td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>10</td>
            <td>ಪಡೆದ ಸವಲತ್ತು ಮತ್ತು ಮಾದರಿ</td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>11</td>
            <td>ಸರಬರಾಜು ಸಂಸ್ಥೆ</td>
            <td><input type="text" data-sync="companyName" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>12</td>
            <td>ಸರಬರಾಜು ಮಾಡಿದ ಸವಲತ್ತಿನಕಾರ್ಯವೈಖರಿಯು ತೃಪ್ತಿಕರವಾಗಿದೆಯೇ?</td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>13</td>
            <td>ಟ್ರ್ಯಾಕ್ಟರ ಆರ್. ಸಿ. ಸಂಖ್ಯೆ- (ಕೃಷಿ ಯಾಂತ್ರೀಕರಣಕ್ಕಾಗಿ ಮಾತ್ರ)</td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>14</td>
            <td>ಬ್ಯಾಂಕ ಹೆಸರು ಮತ್ತು ಶಾಖೆ (ಅರ್ಜಿಯಲ್ಲಿ ನಮೂದಿಸಿದಂತೆ)</td>
            <td><input type="text" data-sync="bankName" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              ಬ್ಯಾಂಕ್‌ಖಾತೆ ಸಂಖ್ಯೆ<br/>
              IFSC CODE<br/>
              MICR NO
            </td>
            <td>
              <input type="text" data-sync="accountNo" style={{ width: '100%', marginBottom: '5px' }} placeholder="Account No" /><br/>
              <input type="text" data-sync="ifscCode" style={{ width: '100%', marginBottom: '5px' }} placeholder="IFSC Code" /><br/>
              <input type="text" data-sync="micr" style={{ width: '100%' }} placeholder="MICR No" />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginBottom: '10px', lineHeight: '1.5', textIndent: '30px' }}>
        <p>
          ಈ ಮೇಲೆ ತಿಳಿಸಿದ ಸೌಲಭ್ಯವನ್ನು ಕೃಷಿ ಇಲಾಖೆಯಯೋಜನೆಯಡಿ ಪಡೆದಿರುತ್ತೇನೆ. ಸದರಿ ತಿಳಿಸಿದ ಸೌಲಭ್ಯವನ್ನು ಕೃಷಿ
          ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ ಬಳಸುತ್ತೇನೆ. ಕೃಷಿಯೇತರ ಚಟುವಟಿಕೆಗಳಿಗೆ ಬಳಸುವುದಿಲ್ಲವೆಂದು ಹಾಗೂ ಮಾರಾಟ
          ಮಾಡುವುದಿಲ್ಲಾವೆಂದು ಪ್ರಮಾಣೀಕರಿಸುತ್ತೇನೆ.
        </p>
      </div>

      <div className="flex justify-between text-center" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <div>
          <p>ಸಹಾಯಕ ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <p>ಗ್ರಾಮ ಪಂಚಾಯತ <input type="text" style={{ width: '120px' }} /></p>
        </div>
        <div>
          <p>ಕೃಷಿ ಅಧಿಕಾರಿ</p>
          <p>ರೈತ ಸಂಪರ್ಕಕೇಂದ್ರ <input type="text" style={{ width: '120px' }} /></p>
        </div>
        <div>
          <div style={{ marginBottom: '10px', height: '40px' }}></div>
          <p>ರೈತನ ಸಹಿ</p>
        </div>
      </div>

      <table style={{ marginTop: '5px' }}>
        <tbody>
          <tr>
            <td width="30%"><strong>Online No</strong></td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td><strong>Aadhar Card No</strong></td>
            <td><input type="text" data-sync="aadhar" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td><strong>Farmer Share Amount Rs</strong></td>
            <td><input type="text" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td><strong>U.T.R. No</strong></td>
            <td><input type="text" data-sync="utrNo" style={{ width: '100%' }} /></td>
          </tr>
          <tr>
            <td><strong>NEFT/RTGS DATE</strong></td>
            <td><input type="date" data-sync="rtgsDate" style={{ width: '100%' }} /></td>
          </tr>
        </tbody>
      </table>
      
      <div className="flex justify-between" style={{ marginTop: '5px' }}>
        <div style={{ visibility: 'hidden' }}>Spacer</div>
        <div className="text-center">
          <div style={{ marginBottom: '5px', height: '30px' }}></div>
          <p>ರೈತನ ಸಹಿ</p>
        </div>
      </div>

    </div>
  );
};

export default Page2_Application;
