import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypeWriter = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Hello There!',
        'Welcome to my blog!',
        'A Notion-based Blog System',
        'UX',
        'Coding',
        'Travel'
      ], // 字符串列表
      typeSpeed: 50, // 打字速度
      backSpeed: 100, // 删除速度
      loop: true, // 循环播放
      backDelay: 1500, // 删除前的延迟
      startDelay: 1000 // 开始前的延迟
    })

    // 销毁实例以防止内存泄漏
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className='green-text-gradient text-8xl font-bold uppercase'>
      <span ref={el}></span>
    </div>
  )
}
export default TypeWriter
