const Temp = /* html */`
<mu-v-box class="mu-background-normal">
  <mu-h-box content-spacing>
    <mu-flex-item size="20%" class="cell" justify-content="center" align-items="center" bordered class="mu-background-primary"></mu-flex-item>
    <mu-splitter></mu-splitter>
    <mu-v-box size="auto" bordered>
      <mu-flex-item size="300px" style="max-height: 400px;" class="cell mu-background-primary"></mu-flex-item>
      <mu-splitter></mu-splitter>
      <mu-flex-item size="auto" class="cell mu-background-primary"></mu-flex-item>
    </mu-v-box>
    <mu-splitter :dragable="false"></mu-splitter>
    <mu-v-box size="20%" cellspacing>
      <mu-flex-item size="1" class="cell mu-background-primary"></mu-flex-item>
      <mu-splitter></mu-splitter>
      <mu-flex-item size="1" class="cell mu-background-primary"></mu-flex-item>
      <mu-splitter></mu-splitter>
      <mu-flex-item size="1" class="cell mu-background-primary"></mu-flex-item>
    </mu-v-box>
  </mu-h-box>
  <hr />
  <mu-v-box style="height: 500px;">
    <mu-h-box size="200px" bordered cellspacing>
      <mu-flex-item size="auto" class="client-area mu-background-primary" cellspacing>1</mu-flex-item>
      <mu-splitter cellspacing></mu-splitter>
      <mu-flex-item size="200px" class="client-area mu-background-primary" cellspacing>2</mu-flex-item>
    </mu-h-box>
    <mu-splitter cellspacing></mu-splitter>
    <mu-h-box size="auto">
      <mu-flex-item size="20%" cellspacing class="client-area mu-background-primary" bordered>3</mu-flex-item>
      <mu-flex-item size="20%" cellspacing class="client-area mu-background-primary" bordered>4</mu-flex-item>
      <mu-flex-item size="30%" cellspacing class="client-area mu-background-primary" bordered>5</mu-flex-item>
      <mu-flex-item size="30%" cellspacing class="client-area mu-background-primary" bordered>6</mu-flex-item>
    </mu-h-box>
  </mu-v-box>
</mu-v-box>
`
export default Temp