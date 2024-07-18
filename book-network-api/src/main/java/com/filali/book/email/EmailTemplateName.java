package com.filali.book.email;

import lombok.Getter;

@Getter
public enum EmailTemplateName {

    ACTIVATION_ACCOUNT("activation_account");

    private final String name;

    EmailTemplateName(String name) {
        this.name = name;
    }



}
