import React, { useState } from 'react'
import AddLink from '../components/addLink'
import UserList from '../components/userList'
import AlertDelete from '../components/aletDelete'

export default function CreateLink() {
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdite] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

  const [userId, setUserId] = useState('')
  const [userLink, setUserLink] = useState('')
  const [userSocialNetwork, setUserSocialNetwork] = useState('default')
  const [links, setLinks] = useState([])
  const [userEdit, setUserEdite] = useState()
  const [deleteLink, setDeleteLink] = useState()


  function handelClick(social, link, id) {
    if (social) setUserSocialNetwork(social)

    if (link) setUserLink(link)

    if (id) setUserId(id)

  }



  function addLink() {
    if (userId.length > 0 && userLink.length > 0 && userSocialNetwork !== 'default') {
      let repete = false;
      let GoalLinks = isEdit ? links.filter(link => link !== userEdit) : links

      GoalLinks.forEach(link => {
        if ((link.userId === userId && link.userSocialNetwork === userSocialNetwork) || (link.userSocialNetwork === userSocialNetwork && link.userLink === userLink)) repete = true
      })

      if (repete) {

        alert('ایتم تکراری مجاز نیست مقادیر را عوض کنید')
        repete = false;
      } else {

        if (isEdit) {
          let index = links.indexOf(userEdit);
          links[index].userId = userId
          links[index].userLink = userLink
          links[index].userSocialNetwork = userSocialNetwork
          setUserSocialNetwork('default')
          setUserLink('')
          setUserId('')
          setIsEdite(false)
        } else {
          setLinks(prev => [
            ...prev,
            { userId, userLink, userSocialNetwork }
          ])

          setUserSocialNetwork('default')
          setUserLink('')
          setUserId('')
        }
      }
    } else {
      alert('پر کردن هر سه فیلد الزامی است')
    }
  }





  function cancel(cancelDelete) {
    if (cancelDelete) {
      setIsDelete(false)
    } else {
      setIsAdd(false)
      setIsEdite(false)
      setUserSocialNetwork('default')
      setUserLink('')
      setUserId('')
    }
  }

  function edite(link) {
    setIsEdite(true)
    setIsAdd(true)
    setUserSocialNetwork(link.userSocialNetwork)
    setUserLink(link.userLink)
    setUserId(link.userId)
    setUserEdite(link)

  }

  function DeleteLink(link, deleteItem) {
    setIsDelete(true)
    setDeleteLink(link)

    if (deleteItem) {
      let newList = links.filter(link => link !== deleteLink)
      setLinks(newList)
      setIsDelete(false)
    }
  }

  return (
    <div className='createLink'>

      <span className='d-block'>مسیرهای ارتباطی</span>

      <p className='addItem' onClick={() => setIsAdd(true)}>{isEdit ? 'ویرایش مسیر ارتباطی' : '+ افزودن مسیر ارتباطی'}</p>

      <AddLink isEdit={isEdit} cancel={cancel} userId={userId} userSocialNetwork={userSocialNetwork} userLink={userLink} addLink={addLink} isAdd={isAdd} handelClick={handelClick} />

      <UserList deleteLink={DeleteLink} edite={edite} links={links} />

      <AlertDelete cancel={cancel} deleteLink={DeleteLink} isDelete={isDelete} />
    </div>
  )
}
