from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from import_export.admin import ExportMixin

from .models import CustomUser


class CustomUserAdmin(ExportMixin, BaseUserAdmin):
    # 定義在管理介面中顯示的字段分組
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        ("個人資訊", {"fields": ("first_name", "last_name", "email", "uuid")}),
        (
            "權限",
            {
                "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions"),
            },
        ),
        ("重要日期", {"fields": ("last_login", "date_joined")}),
    )
    # 設置只讀字段（uuid 自動生成不可編輯）
    readonly_fields = ("uuid",)
    # 列表頁顯示的欄位
    list_display = ("id", "uuid", "username", "email", "is_staff", "is_active")
    # 可搜索的字段
    search_fields = ("username", "email", "uuid", "first_name", "last_name")
    # 過濾器選項
    list_filter = ("is_staff", "is_superuser", "is_active", "groups")
    # 多對多字段的水平過濾器
    filter_horizontal = (
        "groups",
        "user_permissions",
    )
    # 排序規則
    ordering = ("id",)


# 註冊自定義用戶模型到 Admin
admin.site.register(CustomUser, CustomUserAdmin)
