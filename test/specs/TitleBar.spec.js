import RinoTitleBar from 'src/RinoTitleBar.vue'
import { createVM } from '../helpers/utils.js'

describe('Rino Title Bar', function () {

    it('should render title bar with default title', function () {
        const vm = createVM(this, h => (
            <RinoTitleBar></RinoTitleBar>
        ), { components: { RinoTitleBar } })
        vm.$el.querySelector('.app-name').textContent.replace(/ +$/, "").should.eql('RINO')
    })

    it('should render title bar with custom app name', function () {
        let app_name = "Custom"
        const vm = createVM(this, h => (
            <RinoTitleBar app={app_name}></RinoTitleBar>
        ), { components: { RinoTitleBar }, data: {app_name} })
        vm.$el.querySelector('.app-name').textContent.replace(/ +$/, "").should.eql(`RINO ${app_name}`)
    })

})
