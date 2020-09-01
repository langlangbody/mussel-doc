const temp =  /* html */`
<div id="app">
  <h2>Icon Example</h2>
  <hr>
  <div>
    <h3>Local Icons</h3>
    <p><mu-icon icon="ok"></mu-icon>ok</p>
    <p><mu-icon icon="org"></mu-icon>org</p>
    <p><mu-icon icon="close"></mu-icon>close</p>
    <p><mu-icon icon="clear"></mu-icon>clear</p>
    <p><mu-icon icon="search"></mu-icon>search</p>
    <p><mu-icon icon="expand"></mu-icon>expand</p>
    <p><mu-icon icon="collapse"></mu-icon>collapse</p>
    <p><mu-icon icon="ellipsis"></mu-icon>ellipsis</p>
    <p><mu-icon icon="calendar"></mu-icon>calendar</p>
    <p><mu-icon icon="key-up"></mu-icon>key-up</p>
    <p><mu-icon icon="key-down"></mu-icon>key-down</p>
    <p><mu-icon icon="key-left"></mu-icon>key-left</p>
    <p><mu-icon icon="key-right"></mu-icon>key-right</p>
    <p><mu-icon icon="expand-all"></mu-icon>expand-all</p>
    <p><mu-icon icon="collapse-all"></mu-icon>collapse-all</p>
    <p><mu-icon icon="folder-open"></mu-icon>folder-open</p>
  </div>
  <div>
    <h3>Icon Font Class</h3>
    <mu-icon icon-class="icon icon-expand-all"></mu-icon>
  </div>
  <div>
    <h3>SVG Paths Data</h3>
    <p><mu-icon :svg="icon1"></mu-icon></p>
    <p><mu-icon :svg="svg1"></mu-icon></p>
    <p><mu-icon :svg="paths"></mu-icon></p>
</div>
`

export default temp