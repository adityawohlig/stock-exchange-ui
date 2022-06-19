<template>
    <v-dialog v-model="dialog2" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"> Buy </v-card-title>

            <v-card-text> {{ stock.name }} : {{ stock.price }} </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog2 = !dialog2;"> Buy </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>


<script>
export default {
    name: "BuySellPopup",
    props: ['modal','stock'],
    data() {
        return {
        dialog2: this.modal,
        };
    },
    methods: {
        closeDialog() {
        this.dialog2 = !this.dialog2;
        },
        
    },
    };
</script>