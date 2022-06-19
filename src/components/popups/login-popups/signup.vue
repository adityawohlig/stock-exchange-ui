<template>
     <div>
        <v-form v-model="valid" ref="form2">
            <v-container>
                <v-row class="mt-1">
                    <v-col cols="6">
                        <v-text-field
                            v-model="firstname"
                            outlined
                            :rules="nameRules"
                            label="First Name*"
                            :error-messages="
                                saveClicked
                                    ? firstname
                                        ? ''
                                        : 'First Name is required'
                                    : ''
                            "
                            hide-details="auto"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="lastname"
                            outlined
                            :rules="nameRules"
                            label="Last Name*"
                            :error-messages="
                                saveClicked
                                    ? lastname
                                        ? ''
                                        : 'Last Name is required'
                                    : ''
                            "
                            hide-details="auto"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-select
                            outlined
                            v-model="gender"
                            :items="genderList"
                            :rules="[(v) => !!v || 'gender is required']"
                            :error-messages="
                                saveClicked
                                    ? gender
                                        ? ''
                                        : 'Gender is required'
                                    : ''
                            "
                            label="Gender*"
                            hide-details="auto"
                            required
                        ></v-select>
                    </v-col>
                    <v-col class="d-flex" cols="6">
                        <!-- <vue-country-code
                            class="mx-1"
                            :disabled-fetching-country="true"
                            :default-country="'in'"
                            v-model="country"
                            @onSelect="onSelect"
                        ></vue-country-code> -->
                        <v-text-field
                            v-model="phoneNumber"
                            outlined
                            :rules="phoneRules"
                            label="Phone Number*"
                            :error-messages="
                                saveClicked
                                    ? phoneNumber
                                        ? ''
                                        : 'Phone Number is required'
                                    : ''
                            "
                            hide-details="auto"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            v-model="email"
                            outlined
                            :rules="emailRules"
                            label="E-mail*"
                            :error-messages="
                                saveClicked
                                    ? email
                                        ? ''
                                        : 'E-mail is required'
                                    : ''
                            "
                            hide-details="auto"
                            required
                        ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="6">
                         <v-text-field
                            v-model="referralCode"
                            outlined
                            label="referral code"
                            hide-details="auto"
                        ></v-text-field>
                    </v-col> -->
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-select
                            outlined
                            v-model="state"
                            :items="stateList"
                            :rules="[(v) => !!v || 'state is required']"
                            :error-messages="
                                saveClicked
                                    ? state
                                        ? ''
                                        : 'State is required'
                                    : ''
                            "
                            label="State*"
                            hide-details="auto"
                            required
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-select
                            outlined
                            v-model="city"
                            :items="cityList"
                            :rules="[(v) => !!v || 'city is required']"
                            :error-messages="
                                saveClicked
                                    ? city
                                        ? ''
                                        : 'City is required'
                                    : ''
                            "
                            label="City*"
                            hide-details="auto"
                            required
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min, rules.validate]"
                            :type="show1 ? 'text' : 'password'"
                            label="Password*"
                            outlined
                            hint="At least 8 characters"
                            hide-details="auto"
                            :error-messages="
                                saveClicked
                                    ? password
                                        ? ''
                                        : 'Password is required'
                                    : ''
                            "
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="confirmPassword"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show2 ? 'text' : 'password'"
                            label="Confirm Password*"
                            outlined
                            hide-details="auto"
                            :error-messages="errMsg2"
                            @click:append="show2 = !show2"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center text-center">
                    <v-col cols="5" class="noCopy"
                        ><div class="py-1">
                            {{ num1 }} {{ operator }} {{ num2 }} =
                            <v-text-field
                                class="txt-field py-0"
                                v-model.number="captchaEntered"
                                hide-details="auto"
                            ></v-text-field></div
                    ></v-col>
                    <v-col cols="3">
                        <v-card>
                            <v-btn
                                class="btn-padding white--text"
                                block
                                color="green"
                                elevation="2"
                                @click="reset()"
                                >Reset</v-btn
                            >
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <v-btn
                                class="btn-padding white--text"
                                block
                                color="#f17504"
                                elevation="2"
                                @click="saveFormData()"
                                >Create</v-btn
                            >
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <!-- <loader v-if="loading" /> -->
    </div>
</template>

<script>
import cityState from '@/assets/json/state-city.json'
import states from '@/assets/json/states.json'
export default {
  data: () => ({
        valid: false,
        saveClicked: false,
        loading: false,
        show1: false,
        show2: false,
        num1: 7,
        num2: 9,
        captchaEntered: '',
        captchaAnswer: '',
        operator: '/',
        states: states,
        cityState: cityState,
        referralCode: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        gender: '',
        email: '',
        state: '',
        city: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) =>
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) ||
                'E-mail must be valid',
        ],
        nameRules: [
            (v) => !!v || 'Field is required',
            (v) =>
                /^[A-Za-z]+$/.test(v) || 'Invalid Characters entered for field',
        ],
        password: '',
        confirmPassword: '',
        errMsg: '',
        // errMsg2: '',
        rules: {
            required: (value) => !!value || 'Password is required',
            min: (v) => v.length >= 8 || 'Min 8 characters',
            validate: (v) =>
                /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(
                    v,
                ) ||
                'Password must contain an Uppercase letter, a Lowercase letter, a Number and a Special Character',
        },
        phoneRules: [
            (value) => !!value || 'Phone Number is Required',
            (v) => v.length == 10 || 'Invalid phone number',
            (v) =>
                /^[0-9]{10}$/.test(v) ||
                'Invalid characters entered for phone number',
        ],
        genderList: ['male', 'female', 'other'],
    }),
    computed: {
        errMsg2: {
            get() {
                if (this.confirmPassword !== this.password) {
                    return 'Password does not match'
                } else {
                    return ''
                }
            },
            set(val) {
                return val
            },
        },
        stateList() {
            let sL = []
            for (let stateName of this.states) {
                sL.push(stateName.name)
            }
            return sL
        },
        cityList() {
            let cL = []
            if (this.state != '') {
                for (let cityName of this.cityState) {
                    if (cityName.state == this.state) {
                        cL.push(cityName.name)
                    }
                }
            }
            return cL
        },
    },
    created() {
        this.chooseOperator()
    },
    watch: {
        email() {
            this.errMsg = ''
        },
        password() {
            this.errMsg = ''
        },
    },
    methods: {
        chooseOperator() {
            let op = ['+', '-']
            let index = Math.floor(Math.random() * 2)
            this.operator = op[index]
            this.num1 = Math.floor(Math.random() * 10 + 1)
            this.num2 = Math.floor(Math.random() * 10 + 1)
            if (this.num1 < this.num2) {
                let temp = this.num1
                this.num1 = this.num2
                this.num2 = temp
            }
            if (this.operator == '+') {
                this.captchaAnswer = this.num1 + this.num2
            } else if (this.operator == '-') {
                this.captchaAnswer = this.num1 - this.num2
            } else {
                this.captchaAnswer = this.num1 * this.num2
            }
        },
        dialogClose() {
            this.$emit('closeDialog')
        },
        reset() {
            this.saveClicked = false
            this.referralCode = ''
            this.firstname = ''
            this.lastname = ''
            this.phoneNumber = ''
            this.gender = ''
            this.email = ''
            this.state = ''
            this.city = ''
            this.errMsg = ''
            this.errMsg2 = ''
            this.password = ''
            this.confirmPassword = ''
            this.captchaEntered = ''
            this.$refs[`form2`].resetValidation()
            this.chooseOperator()
        },
        saveFormData() {
            this.saveClicked = true
            if (this.valid) {
                if (this.captchaEntered === this.captchaAnswer) {
                    let country = 'India'
                    let countryCodeNo = '+91'
                    let phone = countryCodeNo + this.phoneNumber
                    this.loading = true
                    let signupFormData = {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        password: this.password,
                        phone: phone,
                        email: this.email,
                        countryCodeNo: countryCodeNo,
                        country: country,
                        city: this.city,
                        state: this.state,
                        gender: this.gender,
                        repeatPassword: this.confirmPassword,
                    }
                    console.log("signUp:",signupFormData);
                    this.$toaster.success("Sign Up Successful")
                }
                else {
                    this.$toaster.error("Wrong Captcha Entered")
                    this.chooseOperator();
                }
            }
                  
        },
        onSelect({ name, iso2, dialCode }) {
            console.log(name, iso2, dialCode)
        },
    },
}  

</script>

<style scoped>
div.col.col-6,
div.col.col-12 {
    padding: 6px;
}
div.col.col-4,
div.col.col-3 {
    padding: 12px 6px;
}
.txt-field {
    display: inline-block;
    width: 50%;
}
.noCopy {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
</style>