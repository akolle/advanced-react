import defaultImg from '../../../assets/default-avatar.svg'
import React from 'react'
export function Person({ name, nickName = 'shakAndBake', images }) {
  // const img = images && images[0] && images[0].small && images[0].small.url;
  // const img = images?.[0]?.small?.url || defaultImg //optional chaining
  const img = images?.[0]?.small?.url ?? defaultImg //optional chaining with ?? instead of or (||)

  return (
    <div>
      <img src={img} alt="{name}" style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  )
}
