<template>
  <div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Password</label>
      </div>
      <div class="col-auto">
        <input
          type="password"
          id="inputPassword6"
          class="form-control"
          aria-labelledby="passwordHelpInline"
        />
      </div>
      <div class="col-auto">
        <span id="passwordHelpInline" class="form-text">
          Must be 8-20 characters long.
        </span>
      </div>
    </div>
  </div>
</template>
