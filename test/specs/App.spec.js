import RinoApp from 'src/RinoApp.vue'
import { createVM } from '../helpers/utils.js'

describe('Rino App', function () {
    it('should render app with div#rino-app', function () {
        const vm = createVM(this, h => (
            <RinoApp></RinoApp>
        ), { components: { RinoApp } })
        vm.$el.querySelector('div#rino-app').should.have.id('rino-app')
    })
})
