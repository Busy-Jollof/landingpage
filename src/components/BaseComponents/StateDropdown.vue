<template>
  <div class="select-container">
    <div class="select-container__select-parent">
      <select v-model="stateVal">
        <option hidden selected></option>
        <option
          v-for="(states, index) in allStates"
          :key="index"
          :value="states.value"
        >
          {{ states.stateName }}
        </option>
      </select>
      <img src="@/assets/icons/vector_icon.svg" />
    </div>
    <h4 v-if="stateError" class="error-msg">State is required</h4>
  </div>
</template>

<script>
export default {
  props: {
    stateError: Boolean,
  },
  data() {
    return {
      stateVal: null,
      allStates: [
        {
          value: "AL",
          stateName: "Alabama",
        },
        {
          value: "AK",
          stateName: "Alaska",
        },
        {
          value: "AZ",
          stateName: "Arizona",
        },
        {
          value: "AR",
          stateName: "Arkansas",
        },
        {
          value: "CA",
          stateName: "California",
        },
        {
          value: "CO",
          stateName: "Colorado",
        },
        {
          value: "CT",
          stateName: "Connecticut",
        },
        {
          value: "DE",
          stateName: "Delaware",
        },
        {
          value: "DC",
          stateName: "District Of Columbia",
        },
        {
          value: "FL",
          stateName: "Florida",
        },
        {
          value: "GA",
          stateName: "Georgia",
        },
        {
          value: "HI",
          stateName: "Hawaii",
        },
        {
          value: "ID",
          stateName: "Idaho",
        },
        {
          value: "IL",
          stateName: "Illinois",
        },
        {
          value: "IN",
          stateName: "Indiana",
        },
        {
          value: "IA",
          stateName: "Iowa",
        },
        {
          value: "KS",
          stateName: "Kansas",
        },
        {
          value: "KY",
          stateName: "Kentucky",
        },
        {
          value: "LA",
          stateName: "Louisiana",
        },
        {
          value: "ME",
          stateName: "Maine",
        },
        {
          value: "MD",
          stateName: "Maryland",
        },
        {
          value: "MA",
          stateName: "Massachusetts",
        },
        {
          value: "MI",
          stateName: "Michigan",
        },
        {
          value: "MN",
          stateName: "Minnesota",
        },
        {
          value: "MS",
          stateName: "Mississippi",
        },
        {
          value: "MO",
          stateName: "Missouri",
        },
        {
          value: "MT",
          stateName: "Montana",
        },
        {
          value: "NE",
          stateName: "Nebraska",
        },
        {
          value: "NV",
          stateName: "Nevada",
        },
        {
          value: "NH",
          stateName: "New Hampshire",
        },
        {
          value: "NJ",
          stateName: "New Jersey",
        },
        {
          value: "NM",
          stateName: "New Mexico",
        },
        {
          value: "NY",
          stateName: "New York",
        },
        {
          value: "NC",
          stateName: "North Carolina",
        },
        {
          value: "ND",
          stateName: "North Dakota",
        },
        {
          value: "OH",
          stateName: "Ohio",
        },
        {
          value: "Ok",
          stateName: "Oklahoma",
        },
        {
          value: "OR",
          stateName: "Oregon",
        },
        {
          value: "PA",
          stateName: "Pennsylvania",
        },
        {
          value: "RI",
          stateName: "Rhode Island",
        },
        {
          value: "SC",
          stateName: "South Carolina",
        },
        {
          value: "SD",
          stateName: "South Dakota",
        },
        {
          value: "TN",
          stateName: "Tennessee",
        },
        {
          value: "TX",
          stateName: "Texas",
        },
        {
          value: "UT",
          stateName: "Utah",
        },
        {
          value: "VT",
          stateName: "Vermont",
        },
        {
          value: "VA",
          stateName: "Virginia",
        },
        {
          value: "WA",
          stateName: "Washington",
        },
        {
          value: "WV",
          stateName: "West Virginia",
        },
        {
          value: "WI",
          stateName: "Wisconsin",
        },
        {
          value: "WY",
          stateName: "Wyoming",
        },
      ],
    };
  },

  watch: {
    stateVal(val) {
      this.$emit("stateValueGet", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  &__select-parent {
    width: 100%;
    position: relative;
    background-color: #ebebeb;
    font-size: 1.8rem;
    font-family: $font-primary;
    height: 4.6rem;
    border-bottom: 2.5px solid rgba(2, 152, 55, 0.95);
    max-width: 12.4rem;
    @include respond(tab-port) {
      max-width: 100%;
    }
    img {
      position: absolute;
      right: 1rem;
      transform: translateY(-30%);
      top: 50%;
      width: 2rem;
    }
    select {
      height: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      background: none;
      border-radius: 0;
      padding: 0 1rem;
      margin-top: 0.3rem;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @include respond(tab-port) {
        width: 100%;
      }
    }
  }
  .error-msg {
    font-size: 1.2rem;
    margin: 1rem 0 0;
    color: red;
  }
}
</style>
