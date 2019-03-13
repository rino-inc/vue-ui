import RinoApp from 'src/RinoApp.vue'
import { createVM } from '../helpers/utils.js'

describe('Hi.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<RinoApp></RinoApp>
`, { components: { RinoApp }})
    vm.$el.querySelector('.hello h1').textContent.should.eql('Hello World!')
  })
})
