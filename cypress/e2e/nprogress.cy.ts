describe('NProgress', () => {
  it('should start on route change start and stop on route change complete', () => {
    cy.visit('http://localhost:3000') // 替换为你的初始页面路径
    cy.wait(1000)
    cy.window()
      .its('router')
      .then((router) => {
        // 检查router是否存在
        if (!router) {
          throw new Error('Router is not initialized')
        }

        // 监听路由变化事件
        router.events.on('routeChangeStart', () => {
          cy.get('#nprogress').should('be.visible') // 检查NProgress是否可见
        })

        router.events.on('routeChangeComplete', () => {
          cy.get('#nprogress').should('not.exist') // 检查NProgress是否被隐藏
        })

        router.events.on('routeChangeError', () => {
          cy.get('#nprogress').should('not.exist') // 检查NProgress是否被隐藏
        })

        cy.visit('http://localhost:3000/default-slug')
      })
  })
})
