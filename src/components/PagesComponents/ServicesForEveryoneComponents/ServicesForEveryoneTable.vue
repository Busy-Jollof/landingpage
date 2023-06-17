<template>
  <div class="services-table">
    <h4 class="services-table__title">How we are different</h4>
    <p class="services-table__description">
      Here are some of the features that sets us apart from the big guys
    </p>
    <div class="services-table__table-container">
      <table class="table">
        <thead>
          <tr>
            <th>What we offer</th>
            <th>Ubereats</th>
            <th>Grubhub</th>
            <th>Doordash</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td>
              <div class="data">
                <h2 class="data__title">{{ row.title }}</h2>
                <p class="data__description">
                  {{ row.description }}
                </p>
              </div>
            </td>
            <td>
              <div class="icon">
                <img :src="row.icons.iconClose" alt="Close Icon" />
              </div>
            </td>
            <td>
                <div class="icon">
                  <img
                    :src="row.icons.iconCheckmark"
                    v-if="row.title == 'Perks'"
                    alt="Close Icon"
                  />
                  <img :src="row.icons.iconClose" v-else />
                </div>
            </td>
            <td>
              <div class="icon">
                <img
                  :src="row.icons.iconCheckmark"
                  v-if="row.title == 'Perks'"
                  alt="Close Icon"
                />
                <img :src="row.icons.iconClose" v-else />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import iconClose from "@/assets/icons/close_icon.svg";
import iconCheckmark from "@/assets/icons/carbon_checkmark.svg";
export default {
  data() {
    return {
      rows: [
        {
          title: "Pre-Order +",
          description:
            "Order food for large events such as Weddings, parties etc. up to 4 weeks out",
          icons: {
            iconClose: iconClose,
            iconCheckmark: iconCheckmark,
          },
        },
        {
          title: "Focused Food Categories",
          description:
            "Food categories focused only on varieties of African-inspired meals",
          icons: {
            iconClose: iconClose,
            iconCheckmark: iconCheckmark,
          },
        },
        {
          title: "Search by Meal",
          description:
            "Search your desired meal by name, choose from multiple options",
          icons: {
            iconClose: iconClose,
            iconCheckmark: iconCheckmark,
          },
        },
        {
          title: "Perks",
          description:
            "Order meals and earn points. add money to your account wallet etc. ",
          icons: {
            iconClose: iconClose,
            iconCheckmark: iconCheckmark,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services-table {
  padding: 5.3rem 4.3rem;
  background-color: $color-oxford-blue;
  border-radius: 0.7rem;
  margin: 4rem 0 5rem;
  &__title {
    font-size: 2.5rem;
    font-family: $font-secondary-bold;
    line-height: 3.4rem;
    margin-bottom: 1rem;
    color: $color-white;
    @include respond(phone-x-small) {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin-bottom: 0;
    color: $color-white;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
  &__table-container {
    overflow: auto;
    .table {
      border-collapse: collapse;
      width: 100%;
      margin: 4rem 0;
      thead {
        tr {
          th {
            padding: 0.8rem;
            text-align: center;
            font-size: 2rem;
            font-family: $font-primary-semi-bold;
            line-height: 3rem;
            border: 0.1rem solid $color-white;
            color: $color-white;
          }
        }
      }
      tbody {
        tr {
          td {
            text-align: center;
            font-size: 2rem;
            font-family: $font-primary-semi-bold;
            line-height: 3rem;
            border: 0.1rem solid $color-white;
            color: $color-white;
            padding: 0;
            height: 12.3rem;
            .data {
              padding: 1.7rem 2.8rem;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              width: 38.4rem;
              max-width: 38.4rem;
              margin: auto;
              height: 100%;
              
              &__title {
                text-align: center;
                font-size: 1.6rem;
                font-family: $font-primary-bold;
                line-height: 2.4rem;
                margin-bottom: 0;
                @include respond(phone-x-small) {
                  font-size: 1.8rem;
                  margin-bottom: 0.5rem;
                }
              }
              &__description {
                text-align: center;
                font-size: 1.4rem;
                font-family: $font-primary;
                line-height: 2.2rem;
                margin-bottom: 0;
                max-width: 38.4rem;
                @include respond(phone-x-small) {
                  font-size: 1.8rem;
                  line-height: 2.6rem;
                }
              }
              &__icon {
                padding: 2.9rem 0;
              }
            }
            .icon {
              margin: auto;
              padding: 2.3rem 0;
              width: 20.6rem;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>
