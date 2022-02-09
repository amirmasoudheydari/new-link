import React,{useState} from 'react';

export default function AletDelete(props) {
  const [active,setActive] = useState(true)
  function handelDelete(e){
    if(e.target.value === 'تایید'){
      setActive(false)
    }else{
      setActive(true)
    }
  }

  return <div className={props.isDelete ? 'deleteWrap d-block' : 'deleteWrap'}>
    <div className='delete'>
      <h3>ایا از تصمیم خود مطمئن هستید</h3>
      <p>برای حذف ایتم کلمه تایید را بنویسید</p>
      <input onChange={handelDelete} type="text" />
      <button onClick={() => props.cancel(true)}>انصراف</button>
      <button onClick={() => !active ? props.deleteLink(null,true) : alert('مقدار صحیح را وارد کنید')} disabled={active} >حذف</button>
    </div>
  </div>;
}
