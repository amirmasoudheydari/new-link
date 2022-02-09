import React from 'react'

export default function userList(props) {
  const transform = {
    twitter: 'تویتر',
    telegram: 'تلگرام',
    instagram: 'اینستاگرام',
  }

  return (
    <div className='userList'>
      <ul>
        {props.links.map((link,index) => {
          return <>
            <li key={index}>
              <span>{transform[link.userSocialNetwork]}</span>
              <span>آی دی:{link.userId}</span>
              <span>لینک: {link.userLink}</span>
              <span onClick={() => {props.edite(link)}} className='edit'>ویرایش</span>
              <span onClick={() => props.deleteLink(link, null)} style={{'color':'red', 'cursor':'pointer'}}>حذف</span>
            </li>
          </>
        })}

      </ul>
    </div>
  )
}
