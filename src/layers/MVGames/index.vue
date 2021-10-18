<template>
  <div class="layer-mv-games">
    <div class="row">
      <div class="col-md-2"><button class="btn btn-primary btn-lg mb-5 mt-5 ml-2" @click="fireClick('game-restart')">Restart</button></div>
      <div class="col-md-8">
        <div class="row mt-5">
          <div v-for="(card, key) in cards" :key="key" class="col-md-3">
            <button class="btn btn-primary card-btn btn-lg mb-5" @click="fireClick(card.identifier)">{{ card.name }}</button>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          name: 'A1',
          identifier: 'card_a1',
        },
        {
          name: 'A2',
          identifier: 'card_a2',
        },
        {
          name: 'A3',
          identifier: 'card_a3',
        },
        {
          name: 'A4',
          identifier: 'card_a4',
        },
        {
          name: 'B1',
          identifier: 'card_b1',
        },
        {
          name: 'B2',
          identifier: 'card_b2',
        },
        {
          name: 'B3',
          identifier: 'card_b3',
        },
        {
          name: 'B4',
          identifier: 'card_b4',
        },
        {
          name: 'C1',
          identifier: 'card_c1',
        },
        {
          name: 'C2',
          identifier: 'card_c2',
        },
        {
          name: 'C3',
          identifier: 'card_c3',
        },
        {
          name: 'C4',
          identifier: 'card_c4',
        },
      ]
    }
  },
  methods: {
    fireClick(identifier) {
      this.$parent.bus.sendLayerCommand({
        cmd: 'layer-click',
        content: identifier
      });
    }
  }
}
</script>