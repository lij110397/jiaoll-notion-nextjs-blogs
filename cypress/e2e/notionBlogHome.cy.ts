// test visit my home page
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000')
//   })
// })

// 博客列表页：在src/pages/index.tsx中，你可能需要测试博客列表的加载、分页功能（setCurrentPage）、以及每个博客条目的链接是否正确。
describe('Blog list page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000') // 在每个测试用例开始之前访问博客列表页
  })

  it('loads blog list', () => {
    cy.get('.card').should('exist') // 检查博客列表是否存在
  })

  // it('tests pagination', () => {
  //   cy.get('.join').within(() => {
  //     cy.contains('2').click() // 点击第二页
  //   })
  //   cy.url().should('include', 'page=2') // 检查URL是否包含正确的页码
  // })

  it('checks blog item links', () => {
    cy.get('.card').each(($el) => {
      cy.wrap($el).find('a').should('have.attr', 'href') // 检查每个博客条目的链接是否存在
    })
  })
})
