import React from 'react'


export default function addLink(props) {
  return (
    <div className= {`valueWrap ${props.isAdd ?'display' : ''}`}>
      <p>{props.isEdit ? 'ویرایش مسیر ارتباطی': 'افزودن مسیر ارتباطی'}</p>

      <div className="value">

        <select value={props.userSocialNetwork} onChange={(e) => props.handelClick(e.target.value,null,null)} name="" id="type">
          <option value="default">نوع</option>
          <option value="twitter">تویتر</option>
          <option value="telegram">تلگرام</option>
          <option value="instagram">اینستاگرام</option>  
        </select>

        <input value={props.userLink}  onChange={(e) => props.handelClick(null,e.target.value,null)} type="text" placeholder='لینک را وارد کنید' />
        
        <input value={props.userId}  onChange={(e) => props.handelClick(null,null,e.target.value)} type="number" placeholder='id را وارد کنید' />

      </div>

      <div className='control'>

        <button onClick={() => props.cancel()}>
          انصراف
        </button>

        <button onClick={() => props.addLink()}>
        {props.isEdit ? 'ویرایش مسیر ارتباطی': 'افزودن مسیر ارتباطی'}
        </button>
      </div>
    </div>
  )
}
