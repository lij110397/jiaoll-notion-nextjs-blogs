// 博客详情页
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000/posts/default-slug')
//   })
// })

// 你可能需要测试博客详情页的内容是否正确加载，包括博客标题、日期、描述和标签等。
describe('Blog Detail Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/default-slug') // 在每个测试用例开始之前访问博客列表页
  })
  // blog title
  // it('should display the correct blog title', ()=> {
  //     cy.get('.blog-title').should('contain', 'Richird Norton photorealistic rendering as real photos')
  // })
  // //blog date
  // it('should display the correct blog date', ()=> {
  //     cy.get('.notion-date-selector').should('contain', 'Expected Blog Date') // 请根据实际情况修改选择器
  // })
  // // blog tags
  // it('should display the correct blog tags', ()=> {
  //     cy.get('.notion-tags-selector').should('contain', 'Expected Blog Tags') // 请根据实际情况修改选择器
  // })

  // blog content
  it('should display the correct blog content', () => {
    cy.get('.notion-text').should('not.be.empty')
  })
  // blog static paths generate
  it('should generate the correct static paths', () => {
    cy.request('http://localhost:3000/default-slug').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
