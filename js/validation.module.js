export class Validation {
    constructor() {
        this.submitBtn = document.getElementById('submit-btn')


        this.name = document.getElementById('name-val')
        $(this.name).keyup(() => {
            this.nameValidation()
            this.checkValidation()
        })
        this.email = document.getElementById('email-val')
        $(this.email).keyup(() => {
            this.emailValidation()
            this.checkValidation()
        })
        this.phone = document.getElementById('phone-val')
        $(this.phone).keyup(() => {
            this.phoneValidation()
            this.checkValidation()
        })
        this.age = document.getElementById('age-val')
        $(this.age).keyup(() => {
            this.ageValidation()
            this.checkValidation()
        })
        this.password = document.getElementById('password-val')
        $(this.password).keyup(() => {
            this.passwordValidation()
            this.checkValidation()
        })
        this.repassword = document.getElementById('repassword-val')
        $(this.repassword).keyup(() => {
            if ((this.password.value == this.repassword.value)) {
                $('#repass-alert').addClass('d-none')
                this.checkValidation()
            } else {
                $('#repass-alert').removeClass('d-none')
            }
        })

    }

    nameValidation() {
        const pattern = /^[A-Za-z\s]+$/;
        const nameValue = this.name.value;
        let validName = pattern.test(nameValue);
        if (validName) {
            $('#name-alert').addClass('d-none')
        } else {
            $('#name-alert').removeClass('d-none')
        }
        return validName
    }

    emailValidation() {
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const emailValue = this.email.value;
        let validEmail = pattern.test(emailValue);
        if (validEmail) {
            $('#email-alert').addClass('d-none')
        } else {
            $('#email-alert').removeClass('d-none')
        }
        return validEmail
    }


    phoneValidation() {
        const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        const phoneValue = this.phone.value;
        let validPhone = pattern.test(phoneValue);
        if (validPhone) {
            $('#phone-alert').addClass('d-none')
        } else {
            $('#phone-alert').removeClass('d-none')
        }
        return validPhone
    }


    ageValidation() {
        const pattern = /^(?:[1-9]|[1-9][0-9])$/;
        const ageValue = this.age.value;
        let validAge = pattern.test(ageValue);
        if (validAge) {
            $('#age-alert').addClass('d-none')
        } else {
            $('#age-alert').removeClass('d-none')
        }
        return validAge
    }


    passwordValidation() {
        const pattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        const passwordValue = this.password.value;
        let validPassword = pattern.test(passwordValue);
        if (validPassword) {
            $('#pass-alert').addClass('d-none')
        } else {
            $('#pass-alert').removeClass('d-none')
        }
        return validPassword
    }


    checkValidation() {

        if ((this.name.value && this.age.value && this.email.value && this.password.value && this.phone.value && this.repassword.value)) {
            if (this.nameValidation() &&
                this.emailValidation() &&
                this.phoneValidation() &&
                this.ageValidation() &&
                this.passwordValidation()) {
                $(this.submitBtn).removeAttr('disabled')
            }
        } else {
            $(this.submitBtn).attr('disabled', true)
        }
    }
}


