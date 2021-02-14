<template>
  <form>
    <BaseCard>
      <div class="form-control">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" />
      </div>
      <div class="form-control">
        <label for="lasttName">Last Name</label>
        <input type="text" id="lasttName" />
      </div>
      <div class="form-control">
        <label for="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>
      <BaseButton>Sign Up</BaseButton>
      <BaseButton type="button" mode="flat">Switch to Login</BaseButton>
    </BaseCard>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}
</style>
