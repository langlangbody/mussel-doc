const temp =  /* html */`
<mu-flex-item>
  <h2>Popper Example</h2>
  <hr>
  <mu-flex-box align-items="center" style="margin:40px 0">
    <popper
        v-for="(trigger,index) in triggers"
        :key="index"
        :trigger="trigger"
        content="提示内容"
        :options="{
          placement: 'right'
        }">
        <mu-button>
          {{ trigger }}
        </mu-button>
      </popper>
  </mu-flex-box>

  <mu-flex-box justify-content="center" style="text-align: center;margin-top:40px">
    <popper content="提示内容" :options="{placement: 'top-start'}" >
      <mu-button>上左</mu-button>
    </popper>
    <popper content="提示内容" :options="{placement: 'top'}">
      <mu-button>上边</mu-button>
    </popper>
    <popper content="提示内容" :options="{placement: 'top-end'}" >
      <mu-button>上右</mu-button>
    </popper>
  </mu-flex-box>
  <div style="width: 360px;margin: 10px auto;overflow: hidden;">
    <div  style="float: left;">
        <popper content="提示内容" :options="{placement: 'left-start'}">
          <mu-button>左上</mu-button>
        </popper><br>
        <popper content="提示内容" :options="{placement: 'left'}" >
          <mu-button>左边</mu-button>
        </popper><br>
        <popper content="提示内容" :options="{placement: 'left-end'}" >
          <mu-button>左下</mu-button>
        </popper>
    </div>
    <div  style="float: right;">
        <popper content="提示内容" :options="{placement: 'right-start'}" >
          <mu-button>右上</mu-button>
        </popper><br>
        <popper content="提示内容" :options="{placement: 'right'}" >
          <mu-button>右边</mu-button>
        </popper><br>
        <popper content="提示内容" :options="{placement: 'right-end'}" >
          <mu-button>右下</mu-button>
        </popper>
    </div>
  </div>
  <mu-flex-box justify-content="center"  style="text-align: center;">
      <popper content="提示内容" :options="{placement: 'bottom-start'}" >
        <mu-button>下左</mu-button>
      </popper>
      <popper content="提示内容" :options="{placement: 'bottom'}" >
        <mu-button>下边</mu-button>
      </popper>
      <popper content="提示内容" :options="{placement: 'bottom-end'}" >
        <mu-button>下右</mu-button>
      </popper>
  </mu-flex-box>
</mu-flex-item>

`

export default temp