"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65533],{4842:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>s});var i=t(24691);const n={},a=(0,t(89260).A)(n,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[17]||(o[17]=(0,i.Lk)("h1",{id:"ubisys-s2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ubisys-s2"},[(0,i.Lk)("span",null,"Ubisys S2")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"S2")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Ubisys"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Ubisys")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Power switch S2")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), power_on_behavior, power, energy, action, linkquality")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S2.png",alt:"Ubisys S2"})])],-1))])]),o[18]||(o[18]=(0,i.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,i.Lk)("span",null,"Notes")])],-1)),o[19]||(o[19]=(0,i.Lk)("h3",{id:"configuring-inputs",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#configuring-inputs"},[(0,i.Lk)("span",null,"Configuring Inputs")])],-1)),(0,i.Lk)("p",null,[o[8]||(o[8]=(0,i.eW)("In case the input(s) need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as ")),(0,i.bF)(t,{to:"/devices/C4.html#configuring-inputs"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("it is being done for the ubisys C4")]))),_:1}),o[9]||(o[9]=(0,i.eW)("."))]),o[20]||(o[20]=(0,i.Lk)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling"},[(0,i.Lk)("span",null,"(Re-)Binding and/or Decoupling")])],-1)),(0,i.Lk)("p",null,[o[11]||(o[11]=(0,i.eW)("Also see ")),(0,i.bF)(t,{to:"/devices/C4.html#binding"},{default:(0,i.k6)((()=>o[10]||(o[10]=[(0,i.eW)("the ubisys C4 documentation")]))),_:1}),o[12]||(o[12]=(0,i.eW)(", example use cases:"))]),o[21]||(o[21]=(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"Use the second input to control a different Zigbee device (S1-R only, S1 only has one input)"),(0,i.Lk)("li",null,"Completely decouple the input(s) from the local load")],-1)),o[22]||(o[22]=(0,i.Lk)("p",null,"When decoupled, 'action' will be published when pressing the attached switch button.",-1)),o[23]||(o[23]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[o[14]||(o[14]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>o[13]||(o[13]=[(0,i.eW)("OTA updates")]))),_:1}),o[15]||(o[15]=(0,i.eW)("."))]),o[24]||(o[24]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[16]||(o[16]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[25]||(o[25]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint"><span>Power-on behavior (enum, l1 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint"><span>Power-on behavior (enum, l2 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle_s1</code>, <code>toggle_s2</code>, <code>on_s1</code>, <code>on_s2</code>, <code>off_s1</code>, <code>off_s2</code>, <code>recall_*_s1</code>, <code>recal_*_s2</code>, <code>brightness_move_up_s1</code>, <code>brightness_move_up_s2</code>, <code>brightness_move_down_s1</code>, <code>brightness_move_down_s2</code>, <code>brightness_stop_s1</code>, <code>brightness_stop_s2</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23))])}]]),s=JSON.parse('{"path":"/devices/S2.html","title":"Ubisys S2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys S2 control via MQTT","description":"Integrate your Ubisys S2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring Inputs","slug":"configuring-inputs","link":"#configuring-inputs","children":[]},{"level":3,"title":"(Re-)Binding and/or Decoupling","slug":"re-binding-and-or-decoupling","link":"#re-binding-and-or-decoupling","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l1 endpoint)","slug":"power-on-behavior-enum-l1-endpoint","link":"#power-on-behavior-enum-l1-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l2 endpoint)","slug":"power-on-behavior-enum-l2-endpoint","link":"#power-on-behavior-enum-l2-endpoint","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730408368000},"filePathRelative":"devices/S2.md"}')}}]);